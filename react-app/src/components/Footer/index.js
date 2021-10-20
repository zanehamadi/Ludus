import { Link } from 'react-router-dom'
import './footer.css'


function Footer(){

    return(
        <footer className="footer">
            <a href="https://github.com/zanehamadi" >
                <i className="fab fa-github fa-4x navIcons"></i>
            </a>

            <a href="https://www.linkedin.com/in/zane-el-abedean-hamadi-a47b1a215/">
                <i className="fab fa-linkedin-in fa-4x navIcons"></i>
            </a>

            <a href="https://steamcommunity.com/dev">
                <i className="fab fa-steam fa-4x navIcons"></i>
            </a>
            <Link  to="/about-us" className="navIcons" id="aboutUs">ABOUT US</Link>
        </footer>
    )
}

export default Footer