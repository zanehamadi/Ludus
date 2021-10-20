import { Link } from "react-router-dom"
import './home.css'


function Home({user}){
    return(

        <div className="homeSplashContainer">
            {user ? 
                
                <div className="homePage">
                    <h2 id="welcomeMessage">{`WELCOME BACK, ${user?.username.toUpperCase()}`}</h2>
                    <Link to="/search-questions" id="beginSearchButton">
                            BEGIN SEARCH
                    </Link>
                </div> 
            :
            
                <div className="splashPage">
   
                    <Link to="/search-questions" className="splashText" id="beginSearch">BEGIN SEARCH</Link>
                    <div id="splashParaDiv">
                        <p id="splashParagraph">
                            These days, the options of games feel as vast as space itself. Ludus is a search algorithm here to aid you on your journey to find the perfect game. With the help of Steam's API, you can search for games through a series of genres and categories. If you end up liking a game you find, make sure to create an account and add it to your profile for later reference.
                        </p>
                    </div>
   


                </div>
        
            }
        </div>
    )
}


export default Home