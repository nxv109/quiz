import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import { CTX } from "../../Store";

export default function Login({history}) {
  const [appState, dispatch] = React.useContext(CTX);
  const [userLogin, setUserLogin] = React.useState({});
  const [remember, setRemember] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState(false);

  const hanldChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setUserLogin({
      ...userLogin,
      [name]: target.type === "checkbox"
        ? setRemember(!remember)
        : value
    });
  };

  const hanldSubmit = (e) => {
    e.preventDefault();

    const user_login = {
      email: userLogin.email,
      password: userLogin.password
    };

    const rs = async () => {
      const res = await axios.post('/api/users/login', user_login);
      // console.log(res)
      setMessage(res.data.message);
      setStatus(res.data.status);

      if (res.data.status === true) {
        dispatch({ type: "TEST", payload: user_login });
        sessionStorage.setItem('info_user_s', JSON.stringify(user_login));
        history.push('/');
      };

      if (res.data.status === true && remember === true) {
        localStorage.setItem('info_user_l', JSON.stringify(user_login));
      }
    };
    rs();
  };

  return (<div className="container pt-3 pb-3">
    <div className="row">
      <div className="card w-100">
        <div className="card-header">
          <h1>Đăng nhập</h1>
        </div>
        <div className="card-body">
          {/* message */}
          <span className={`badge mb-3 ${status === true
              ? "badge-success"
              : "badge-danger"}`}>{message}</span>
          <blockquote className="blockquote mb-0">
            <form onSubmit={hanldSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="text" name="email" value={userLogin.email || ""} onChange={hanldChange}/>
              </div>
              <div className="form-group">
                <label>Mật khẩu</label>
                <input className="form-control" type="password" name="password" value={userLogin.password || ""} onChange={hanldChange}/>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember" onChange={hanldChange} checked={remember}/>
                <label className="form-check-label">
                  Nhớ tôi
                </label>
              </div>
              <button className="btn btn-success mt-3" type="submit">
                Đăng nhập
              </button>
              <br/>
              <Link className="text-primary font-weight-normal" style={{
                  fontSize: "15px"
                }} to="/forgotPassword">Quên mật khẩu?</Link>
            </form>
          </blockquote>
        </div>
      </div>
    </div>
  </div>);
}
