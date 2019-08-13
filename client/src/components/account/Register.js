import React from "react";
import axios from "axios";

export default function Register() {
    const [users, setUsers] = React.useState({});
    const [message, setMessage] = React.useState("");

    const hanldChange = (e) =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;

        setUsers({...users, [name]: value});
    };

    const hanldSubmit = (e) => {
        e.preventDefault();

        const body_users = {
            fullName: users.fullName,
            email: users.email,
            password: users.password
        };

        if(users.password_again !== users.password){
            setMessage("Mật khẩu chưa khớp");
        }else{
            axios.post('http://localhost:5000/api/users/register', body_users)
            .then(res => {
                setMessage(res.data.message);
            })
        }
    };
    
    return (
        <div className="container pt-3 pb-3">
        <div className="row">
            <div className="card w-100">
            <div className="card-header">
                <h1>Đăng ký</h1>
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <form onSubmit={hanldSubmit} autoComplete="off">
                        <div className="row">
                        <div className="col-md-12">
                        {/* message */}
                        <span className={`badge mb-3 ${message === "Bạn đã đăng ký thành công!" ? "badge-success" : "badge-danger"}`}>{message}</span>
                            <fieldset className="form-group">
                                <label>Họ và tên</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="fullName"
                                    value={users.fullName || ""}
                                    onChange={hanldChange}
                                />
                            </fieldset>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <fieldset className="form-group">
                                <label>Email</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    value={users.email || ""}
                                    onChange={hanldChange}
                                />
                            </fieldset>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                            <fieldset className="form-group">
                                <label>Mật khẩu</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    value={users.password || ""}
                                    onChange={hanldChange}
                                />
                            </fieldset>
                        </div>
                        <div className="col-md-6">
                            <fieldset className="form-group">
                            <label htmlFor="formGroupExampleInput">
                                Nhập lại mật khẩu
                            </label>
                            <input
                                className="form-control"
                                type="password"
                                name="password_again"
                                value={users.password_again || ""}
                                onChange={hanldChange}
                            />
                            </fieldset>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-success">
                        Đăng ký
                        </button>
                    </form>
                </blockquote>
            </div>
            </div>
        </div>
        </div>
    );
}
