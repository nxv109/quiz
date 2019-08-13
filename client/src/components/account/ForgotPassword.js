import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    const [users, setUsers] = React.useState({});
    const [message, setMessage] = React.useState("");

    const hanldChange = (e) =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;

        setUsers({...users, [name]: value });
        // console.log('GET_BODY_REGISTER', users);
    };

    const hanldSubmit = (e) => {
        e.preventDefault();

        if(users.newPassword.length < 6){
            setMessage("Mật khẩu quá ngắn");
        }else{
            const datas = {
                email: users.email,
                oldPassword: users.oldPassword,
                newPassword: users.newPassword
            };

            axios.put(`http://localhost:5000/api/users/forgotPassword/`, datas)
            .then(res => {
                setMessage(res.data.message);
                // console.log(res.data);
            })
        }
    };

    return (
        <div className="container pt-3 pb-3">
            <div className="row">
                <div className="card w-100">
                <div className="card-header">
                    <h1>Quên mật khẩu</h1>
                </div>
                <div className="card-body">
                    {/* message */}
                    <span className={`badge mb-3 ${message === "Đổi mật khẩu thành công" ? "badge-success" : "badge-danger"}`}>{message}</span>
                    <blockquote className="blockquote mb-0">
                        <form onSubmit={hanldSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    value={users.email || ""}
                                    onChange={hanldChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Mật khẩu cũ</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="oldPassword"
                                    value={users.oldPassword || ""}
                                    onChange={hanldChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Mật khẩu mới</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="newPassword"
                                    value={users.newPassword || ""}
                                    onChange={hanldChange}
                                    required
                                />
                            </div>
                            <button className="btn btn-success mt-3" type="submit">
                                Sửa
                            </button>
                            {
                                message === "Đổi mật khẩu thành công" ? (<Link className="btn btn-success ml-3 mt-3" to="/login">Đăng nhập</Link>) : ""
                            }
                        </form>
                    </blockquote>
                </div>
                </div>
            </div>
        </div>
    );
};