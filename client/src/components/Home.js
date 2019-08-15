import React from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

import {CTX} from "../Store";

export default function Home() {
  const [appState, dispatch] = React.useContext(CTX);
  // const [subjects, setSubject] = React.useState([]);

  React.useEffect(() => {
    const fetch_data = async () => {
      const res = await axios.get('http://localhost:5000/api/subjects/');

      dispatch({type: "FETCH_DATA_SUBJECT", payload: res.data});
    };
    dispatch({type: "UPDATE_PARAMS"});
    fetch_data();
  }, [dispatch]);

  let search_subjects = appState.subjects.filter(subject => {
    return subject.subject.toLowerCase().search(appState.search_keyword.toLowerCase()) !== -1;
    // return subject.subject.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  });

  // console.log('subjects', appState.subjects)

  return (<div className="box-content">
    <div className="container pt-3 pb-3">
      <div className="row">
        {
          search_subjects.map((v, index) => (<div key={index} className="card text-center mb-3" style={{
              width: "100%"
            }}>
            <div className="card-header">
              <h4>{v.subject}</h4>
            </div>
            <div className="card-body">
              <p className="card-text">{v.descriptions}</p>
              <button className="btn btn-success">
                <Link className="nav-link text-white" to={`/exam/${v._id}`}>Kiểm tra thôi nào!</Link>
              </button>
            </div>
            {/*<div className="card-footer text-muted">2 days ago</div>*/}
          </div>))
        }
      </div>
    </div>
  </div>);
}
