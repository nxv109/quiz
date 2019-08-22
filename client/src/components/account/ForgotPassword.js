import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import { CTX } from "../../Store";

export default function ForgotPassword() {
    // const [appState, dispatch] = React.useContext(CTX);
    const [users, setUsers] = React.useState({});
    const [message, setMessage] = React.useState("");
    const [emails, setEmails] = React.useState([]);
    const [checkUser, setCheckuser] = React.useState(false);

    const hanldChange = (e) =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;

        setUsers({...users, [name]: value });
        // console.log('GET_BODY_REGISTER', users);
    };

    React.useEffect(() => {
        const fetch_users = async () => {
            const res = await axios.get('/api/users/list/');

            setEmails(res.data);
        };
        
        fetch_users();
    }, []);

    const hanldCheckUser = () => {
        const email_user = emails.filter(email => {
            return email.email === users.email;
        });

        if(email_user.length > 0){
            console.log(email_user);
            setCheckuser(true);
            setMessage("");
        }else{
            setMessage("Không tìm thấy người dùng!");
        }
    };

    const hanldSetNewPassword = (e) => {
        e.preventDefault();

        if(users.newPassword.length < 6){
            setMessage("Mật khẩu quá ngắn");
        }else{
            const datas = {
                email: users.email,
                newPassword: users.newPassword
            };

            axios.put(`/api/users/forgotPassword/`, datas)
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
                    <h1>Quên mật khẩu</h1>
                </div>
                <div className="card-body">
                    {/* message */}
                    <span className={`badge mb-3 ${message === "Đặt lại mật khẩu thành công" ? "badge-success" : "badge-danger"}`}>{message}</span>
                    <blockquote className="blockquote mb-0">
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
                            <div className={`form-group ${checkUser ? "" : "d-none"}`}>
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
                            {
                              checkUser
                              ? (<button onClick={hanldSetNewPassword} className="btn btn-success mt-3" type="button">
                                  Đặt lại mật khẩu
                              </button>)
                              : (<button onClick={hanldCheckUser} className="btn btn-success mt-3" type="button">
                                  Tiếp theo
                                </button>)
                            }
                            {
                                message === "Đặt lại mật khẩu thành công" ? (<Link className="btn btn-success ml-3 mt-3" to="/login">Đăng nhập</Link>) : ""
                            }
                    </blockquote>
                </div>
                </div>
            </div>
        </div>
    );
};
