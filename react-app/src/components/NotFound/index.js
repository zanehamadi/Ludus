import { Link } from 'react-router-dom'
import './notfound.css'

function NotFound(){

    return(
        <div className="notFoundDiv">
            <h1>404 NOT FOUND.</h1>
            <p>The page you were looking for does not exist. Please check the URL or navigate back to the home page.</p>
            <Link to='/' className="notFoundHomeButton">HOME</Link>
        </div>

    )
}

export default NotFound
