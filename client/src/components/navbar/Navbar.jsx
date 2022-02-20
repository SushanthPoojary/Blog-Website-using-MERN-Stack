import { Link } from "react-router-dom"
import "./navbar.css"
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function NavBar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch({type: "LOGOUT"});
    }

    const PF = "http://localhost:5000/images/"

    return (
        <div className="nav">
            <div className="topLeft">
                <h1>BLOG</h1>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                    
                </ul>
            </div>
            {/* <div className="topSocialMedia">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div> */}
            <div className="topRight">
                {user ? 
                (user.profilePic ? 
                    <>
                        <Link to={"/settings"}><img className="topImage" src={PF + user.profilePic} alt="Profile" /></Link>
                        <div className="topLogout" onClick={handleLogout}>
                            {user && "LOGOUT" }
                        </div>
                    </>
                 :  <>
                        <Link to={"/settings"}><i className="topImageIcon fas fa-user-alt"></i></Link>
                        <div className="topLogout" onClick={handleLogout}>
                            {user && "LOGOUT" }
                        </div>
                    </>
                 )
                 : (
                     <ul className="topList">
                        <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                        <li className="topListItem"><Link className="link" to="/register">SIGN UP</Link></li>
                     </ul>
                 )}
                {/* <i className="topSearchIcon fas fa-search"></i> */}
            </div>
        </div>
    )
}