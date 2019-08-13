import React from "react";
import { Link } from "react-router-dom";
import { CTX } from "../Store";

export default function Finish() {
	const [appState] = React.useContext(CTX);
	const [name, setName] = React.useState("");

	React.useEffect(() => {
		const name = JSON.parse(sessionStorage.getItem('info_user_s')) || JSON.parse(localStorage.getItem('info_user_l'));
		setName(name);
	}, [setName]);
	
	//score
	const total_score_fn = appState.total.length*100;
	const percent = Math.round(appState.total_score*100/total_score_fn);

	// console.log('quizzes', appState.quizzes);
	// console.log('options', appState.options);
	// console.log('your answer', appState.your_answer);

    return(
        <div className="container">
        	<div className="row">
        		<div className="card w-100 mt-3">
			        <div className="card-header mb-5">
			          <h1 className="text-center text-success">Hoàn thành! <img src="https://img.icons8.com/cute-clipart/50/000000/facebook-like.png" alt="icon finish"></img></h1>
			        </div>
			        <div className="card-body">
						<blockquote className="blockquote mb-0 text-center">
							{
								percent < 50 ? (<div>Số điểm của <strong>"{name ? name.email : "chú em"}"</strong> là <div className="badge badge-danger">{appState.total_score} ({percent}%)</div><div>Làm chưa tốt nha chú em!</div></div>)
								: percent < 80 ? (<div>Số điểm của <strong>"{name ? name.email : "chú em"}"</strong> là <div className="badge badge-warning">{appState.total_score} ({percent}%)</div><div>Tạm được, cần cố gắng hơn nha!</div></div>)
								: (<div>Số điểm của <strong>"{name ? name.email : "chú em"}"</strong> là <div className="badge badge-success">{appState.total_score} ({percent}%)</div><div>Làm tốt lắm chú em!<img src="https://img.icons8.com/officel/16/000000/cool.png" alt="icon finish"/></div></div>)
							}
							<Link className="btn btn-success mt-5" to="/">Kiểm tra tiếp nào dế yêu...</Link>

							<div className="mt-5">
								<div id="accordion">
							        <div className="card">
							          <div className="card-header" id="headingTwo">
							            <h5 className="mb-0">
								            <button className="btn btn-link collapsed text-info" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								                Xem kết quả
								            </button>
							            </h5>
							          </div>
							          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
							            <div className="card-body">
							            	{
												appState.quizzes.map((quiz, index) => (
													<div key={index} className="card border-success mb-3" style={{maxWidth: '100%'}}>
														<div className="card-header bg-transparent border-success dis-flex">
															<div>{quiz.question}</div>
														</div>
														<div className="card-body text-success">
															<form>
																{
																	quiz.options.map((option, index) => (
																		<div key={index} className="form-check text-justify">
																			{
																				appState.your_answer.length > 1 ? 
																				( appState.your_answer.map((v, index) => 
																					(
																						<input
																							key={index}
																							className="form-check-input"
																							name="option"
																							type="radio"
																							value={option}
																							defaultChecked={quiz.answer === option ? true : false}
																							disabled={true}
																						/>
																					))
																				)
																				: 
																				(
																					<input
																						className="form-check-input"
																						name="option"
																						type="radio"
																						value={option}
																						defaultChecked={quiz.answer === option ? true : false}
																						disabled={true}
																					/>
																				)
																			}
																			
																			<label className={`form-check-label ${quiz.answer === option ? "text-success" : "text-danger"}`} htmlFor="defaultCheck1">
																				{option}
																			</label>
																		</div>
																	))
																}
															</form>
														</div>
													</div>
												))
											}
							            </div>
							          </div>
							        </div>
							    </div>
							</div>
						</blockquote>
			        </div>
			    </div>
        	</div>
        </div>
    )
}