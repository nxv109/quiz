import React from "react";
import {Link} from "react-router-dom";

import { CTX } from "../../Store";

export default function Navbar() {
  const [appState, dispatch] = React.useContext(CTX);
  // const [userLogin, setUserLogin] = React.useState(null);
  let user_login = JSON.parse(sessionStorage.getItem('info_user_s')) || JSON.parse(localStorage.getItem('info_user_l'));

  const hanldLogout = () => {
    sessionStorage.removeItem('info_user_s');
    localStorage.removeItem('info_user_l');
  };

  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="nav-link" to="/"><img style={{
      width: "50px"
    }} src="https://img.icons8.com/plasticine/100/000000/classroom.png" alt="icon_logo"/></Link>
    <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/feedback">Feedback</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/qa">Q&amp;A</Link>
        </li>
        <li className="nav-item dropdown">
          <a aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#0" id="navbarDropdown" role="button">
            {
              user_login
                ? (<img style={{
                    width: "25px"
                  }} src="https://img.icons8.com/plasticine/100/000000/user-male-circle.png" alt=""/>)
                : "Account"
            }
          </a>
          {
            user_login
              ? (<div aria-labelledby="navbarDropdown" className="dropdown-menu">
                <Link className="nav-link dropdown-item" to="/profile/">Chỉnh sửa thông tin</Link>
                <Link className="nav-link dropdown-item" to="/changePassword/">Đổi mật khẩu</Link>
                <a className="nav-link dropdown-item" onClick={hanldLogout} href="/login/">Đăng xuất</a>
              </div>)
              : (<div aria-labelledby="navbarDropdown" className="dropdown-menu">
                <Link className="nav-link dropdown-item" to="/register/">Đăng ký</Link>
                <Link className="nav-link dropdown-item" to="/login/">Đăng nhập</Link>
              </div>)
          }

        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input aria-label="Search" className="form-control mr-sm-2" placeholder="Search" type="search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>)
}
