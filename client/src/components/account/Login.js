import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default function Login() {
    const [userLogin, setUserLogin] = React.useState({});
    const [remember, setRemember] = React.useState(false);
    const [message, setMessage] = React.useState("");

    React.useEffect(() => {
        if(message === "Đăng nhập thành công!"){
            sessionStorage.setItem('info_user_s', JSON.stringify(userLogin));
        };

        if(message === "Đăng nhập thành công!" && remember === true){
            localStorage.setItem('info_user_l', JSON.stringify(userLogin));
        }
        
    }, [message, userLogin, remember]);

    const hanldChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        setUserLogin({...userLogin, [name]: target.type === "checkbox" ? setRemember(!remember) : value });
    };

    const hanldSubmit = (e) => {
        e.preventDefault();

        const user_login = {
            email: userLogin.email,
            password: userLogin.password
        };

        const rs = async () => {
            const res = await axios.post('http://localhost:5000/api/users/login', user_login);
            // console.log(res)
            setMessage(res.data.message);

            // await history.push('/');
            // window.location.reload();
        };
        rs();
    };

    return (
        <div className="container pt-3 pb-3">
        <div className="row">
            <div className="card w-100">
            <div className="card-header">
                <h1>Đăng nhập</h1>
            </div>
            <div className="card-body">
                {/* message */}
                <span className={`badge mb-3 ${message === "Đăng nhập thành công!" ? "badge-success" : "badge-danger"}`}>{message}</span>
                <br />
                {
                    message === "Đăng nhập thành công!" ? (<a href="/" className="btn btn-success">GO HOME</a>) : ""
                }
                <blockquote className="blockquote mb-0">
                <form onSubmit={hanldSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            value={userLogin.email || ""}
                            onChange={hanldChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            value={userLogin.password || ""}
                            onChange={hanldChange}
                        />
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            onChange={hanldChange}
                            checked={remember}
                        />
                        <label className="form-check-label">
                            Nhớ tôi
                        </label>
                    </div>
                    <button className="btn btn-success mt-3" type="submit">
                        Đăng nhập
                    </button>
                    <br />
                    <Link className="text-primary font-weight-normal" style={{fontSize: "15px"}} to="/forgotPassword">Quên mật khẩu?</Link>
                </form>
                </blockquote>
            </div>
            </div>
        </div>
        </div>
    );
}
