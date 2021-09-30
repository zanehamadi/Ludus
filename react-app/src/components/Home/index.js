import { Link } from "react-router-dom"
import './home.css'


function Home({user}){
    return(

        <div className="homeSplashContainer">
            {user ? 
                
                <div className="homePage">
                    <h2 id="welcomeMessage">{`WELCOME BACK, ${user?.username.toUpperCase()}`}</h2>
                    <div className="beginSearchContainer"><Link to="/search-questions" className="beginSearchButton">BEGIN SEARCH</Link></div>
                </div> 
            :
            
                <div className="splashPage">
                    <div>
                        <Link to='/login' className="splashText">LOGIN</Link>
                    </div>
                    <div>
                        <Link to='/sign-up' className="splashText">SIGNUP</Link>
                    </div>
                    <div>
                        <Link to="/search-questions" className="splashText">BEGIN SEARCH</Link>
                    </div>

                    <div id="splashParaDiv">
                        <p id="splashParagraph">
                            In modern day, the options of games feel as vast as space itself. Ludus is a search algorithm here to help you on your journey to find the perfect game.
                        </p>
                    </div>

                </div>
        
            }
        </div>
    )
}


export default Home