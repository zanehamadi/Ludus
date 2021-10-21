import { NavLink } from "react-router-dom"
import LogoutButton from '../auth/LogoutButton'
import DemoButton from "../auth/DemoButton"
import './nav.css'

function NavBar({user}){
    return(
        <div className="nav">
            {user ?
                <>
                    <div className="navLinks navHome"><NavLink to='/'>HOME</NavLink></div>
                    <div className="navLinks navHome"><NavLink to='/search-questions'>SEARCH</NavLink></div>
                    <div className="navLinks navHome"><NavLink to={`/users/${user.id}`}>PROFILE</NavLink></div>
                    <div className="navLinks navHome"><LogoutButton/></div>
                </>
            :
                <>
                    <div className="navLinks"><NavLink to='/'>HOME</NavLink></div>
                    <div className="navLinks"><NavLink to='/search-questions'>SEARCH</NavLink></div>
                    <div className="navLinks"><NavLink to='/login'>LOGIN</NavLink></div>
                    <div className="navLinks"><NavLink to='/sign-up'>SIGNUP</NavLink></div>
                    <div className="navLinks"><DemoButton/></div>
                </>
            }
        </div>
    )
}

export default NavBar