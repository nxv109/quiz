import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import Store
import Store from "./Store";

//components
import Navbar from "./components/commons/Navbar";

//css and js
import "./libs/css/bootstrap.min.css";
import "./App.css";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Feedback = React.lazy(() => import("./components/Feedback"));
const QA = React.lazy(() => import("./components/QA"));
const Exam = React.lazy(() => import("./components/Exam"));
const Finish = React.lazy(() => import("./components/Finish"));
const Register = React.lazy(() => import("./components/account/Register"));
const Login = React.lazy(() => import("./components/account/Login"));
const Profile = React.lazy(() => import("./components/account/EditProfile"));
const ChangePassword = React.lazy(() => import("./components/account/ChangePassword"));
const ForgotPassword = React.lazy(() => import("./components/account/ForgotPassword"));

function App() {

  return (
    <div className="text-secondary">
      <Store>
        <Router>
          <Navbar />
          <React.Suspense 
            fallback={
              <div className="box-loader"><div className="loader"></div></div>
            }
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/contact/" component={Contact} />
              <Route path="/feedback/" component={Feedback} />
              <Route path="/qa/" component={QA} />
              <Route path="/exam/:id" component={Exam} />
              <Route path="/finish/" component={Finish} />
              <Route path="/register/" component={Register} />
              <Route path="/login/" component={Login} />
              <Route path="/profile/" component={Profile} />
              <Route path="/changePassword/" component={ChangePassword} />
              <Route path="/forgotPassword/" component={ForgotPassword} />
            </Switch>
          </React.Suspense>
          
        </Router>
      </Store>
    </div>
  );
}

export default App;
