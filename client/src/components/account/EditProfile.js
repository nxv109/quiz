import React from "react";
import axios from "axios";

export default function EditProfile() {
    const [users, setUsers] = React.useState({});
    const [message, setMessage] = React.useState("");

    React.useEffect(() => {
        const fetch_data = async () => {
            const res = await axios.get('/api/users/list');
            const users_login = JSON.parse(sessionStorage.getItem('info_user_s')) || JSON.parse(localStorage.getItem('info_user_l'));
            const users = res.data.filter(v => {
                return v.email === users_login.email;
            });
            // console.log(users[0]);
            setUsers(users[0]);
        };

        fetch_data();
    }, []);

    const hanldChange = (e) =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;

        setUsers({...users, [name]: value });
        // console.log('GET_BODY_REGISTER', users);
    };

    const hanldSubmit = (e) => {
        e.preventDefault();

        const edit_user = {
            fullName: users.fullName,
            email: users.email,
            password: users.password
        };

        axios.put(`/api/users/editProfile/${users._id}/`, edit_user)
        .then(res => {
            setMessage(res.data.message);
            // console.log(res.data);
        })
    };

    return (
        <div className="container pt-3 pb-3">
            <div className="row">
                <div className="card w-100">
                <div className="card-header">
                    <h1>Chỉnh sửa thông tin cá nhân</h1>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <form onSubmit={hanldSubmit} autoComplete="off">
                            <div className="row">
                            <div className="col-md-12">
                            {/* message */}
                            <span className={`badge mb-3 ${message === "Sửa thành công" ? "badge-success" : "badge-danger"}`}>{message}</span>
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

                            <button type="submit" className="btn btn-success">
                                Sửa
                            </button>
                        </form>
                    </blockquote>
                </div>
                </div>
            </div>
        </div>
    );
};
