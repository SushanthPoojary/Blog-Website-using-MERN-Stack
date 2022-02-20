import React, { useContext } from "react";
import NavBar from "./components/navbar/Navbar.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Settings from "./pages/settings/settings.jsx";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write.jsx";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Context } from "./context/Context.js";


export default function App() {
    const {user} = useContext(Context);
    return (
        <Router>
            <NavBar />
            {/* <Home /> */}
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route path="/register">
                    {user ? <Home /> : <Register />}
                </Route>
                <Route path="/login">
                    {user ? <Home /> : <Login />}
                </Route>
                <Route path="/write">
                    {user ? <Write /> : <Register />}
                </Route>
                <Route path="/settings">
                    {user ? <Settings /> : <Register />}
                </Route>
                <Route path="/post/:postId">
                    <Single />
                </Route>
            </Switch>
            
        </Router>
    );
}
