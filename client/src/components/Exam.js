import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactCountdownClock from "react-countdown-clock";

import { CTX } from "../Store";

const url = "http://localhost:5000";

export default function Exam({ match, location }) {
    const [appState, dispatch] = React.useContext(CTX);
    const [core, setCore] = React.useState(0);
    const [checked, setChecked] = React.useState(false);

    //fetch data
    React.useLayoutEffect(() => {
        const fetch_data = async () => {
            const res = await axios.get(`${url}/api/quizzes/list/${match.params.id}`);
            dispatch({ type: "FETCH_DATA_QUIZZES", payload: res.data[core], total: res.data, quizzes: res.data });
        };
        const fetch_data_subject = async () => {
            const res = await axios.get(`${url}/api/subjects/`);
            dispatch({ type: "FETCH_DATA_SUBJECT", payload: res.data });
        };
        fetch_data();
        fetch_data_subject();
    }, [dispatch, match.params.id, core]);

    //time quiz
    const hanldTimer = () => {
        console.log("ban da het time");
        dispatch({ type: "TIME_UP", payload: true });
    };

    //xu ly next prev
    const prevQuiz = () => {
        if(core <= 0) return setCore(0);
        setCore(core - 1);
        // console.log('core', core);
    };

    const nextQuiz = () => {
        if(core >= appState.total.length - 1) return setCore(appState.total.length - 1);
        setCore(core + 1);

        setChecked(false);
    };

    //chot dap an
    const hanldChooseQuiz = () => {
        dispatch({ type: "CLOSING_ANSWER" });
    };

    //tong diem
    const hanldChange = (e) => {
        dispatch({ type: "YOUR_ANSWER", payload: e.target.value });
    };

    //update params total_score in Store.js
    const hanldUpdateParams = () => {
        dispatch({ type: "UPDATE_PARAMS" });
    };

    return(
        <div className="container pt-3 pb-3">
            <div className="row">
            <div className="col-sm-8">
                <div className="card border-success mb-3" style={{maxWidth: '100%'}}>
                    <div className="card-header bg-transparent border-success dis-flex">
                        <div>{appState.quiz.question}</div>
                        <div>
                            <ReactCountdownClock
                                seconds={10*appState.total.length+1}
                                color="#28a745"
                                alpha={0.9}
                                size={50}
                                onComplete={hanldTimer}
                            />
                        </div>
                    </div>
                    <div className={`text-center ${appState.disabled ? "" : "d-none"}`}><span className="badge badge-warning text-white">Bạn đã hết time làm bài!</span></div>
                        <div className="card-body text-success">
                            <form>
                                {
                                    appState.options.map((option, index) => (
                                        <div key={index} className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    className="form-check-input"
                                                    name="option"
                                                    type="radio"
                                                    value={option}
                                                    onChange={hanldChange}
                                                    disabled={appState.disabled ? true : false}
                                                    checked={appState.answer === option ? true : checked}
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    ))
                                }
                                
                                <div className="card-footer bg-transparent border-success">
                                    <div className="d-flex justify-content-between">
                                        <button onClick={prevQuiz} type="button" className="btn btn-dark">Quay lại</button>
                                        {
                                            appState.disabled ? "" : (<button onClick={hanldChooseQuiz} type="button" className="btn btn-danger">Chốt đáp án</button>)
                                        }
                                        {
                                            core >= appState.total.length - 1 ? (<Link onClick={nextQuiz} className="btn btn-success" to="/finish/">Hoàn thành</Link>)
                                            : appState.disabled ? (<Link onClick={nextQuiz} className="btn btn-success" to="/finish/">Hoàn thành</Link>) 
                                            : (<button onClick={nextQuiz} type="button" className="btn btn-success">Tiếp theo</button>)
                                        }
                                    </div>
                                </div>
                            </form>
                            <div className=" text-center">
                                <h5><span className="badge badge-pill badge-info">Bạn đang ở câu {core + 1}/{appState.total.length}</span></h5>
                            </div>
                            <div className="text-center"><span className="badge badge-warning">Warning:</span><span className="font-italic text-danger"> Nếu bạn không "chốt đáp án", thì đáp án của bạn sẽ không được tính và "không thể sửa" đáp án sau khi đã chốt!</span></div>
                        </div>
                    </div> 
            </div>
            <div className="col-sm-4">
                <div className="card border-success" style={{width: '100%'}}>
                    <div className="card-header">
                        Môn thi
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            appState.subjects.map((subject, index) => (
                                <li key={index} className="list-group-item">
                                    {/* <Link onClick={hanldUpdateParams} className="text-success" to={`/exam/${subject._id}`}>{subject.subject}</Link> */}
                                    <a onClick={hanldUpdateParams} className="nav-link text-success" href={`/exam/${subject._id}`}>{subject.subject}</a>

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}