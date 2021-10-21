import { useEffect} from "react"
import { getGame} from "../../store/games"
import { useDispatch, useSelector } from "react-redux"
import { addNewPlayed, removePlayed,addNewPlaying, removePlaying, addWantToPlay, removeWantToPlay, addReview, deleteReview, updateReview  } from "../../store/session"
import './user.css'


function Lists({user}){
    const dispatch = useDispatch()
    const games = Object.values(useSelector(state => state.games))
    const wantToPlayGames = games.filter(game => user.wantToPlay.includes(game.id))
    const playingGames = games.filter(game => user.playing.includes(game.id))
    const playedGames = games.filter(game => user.played.includes(game.id))

    const addPlayed = async(id) => {
        
        const payload = {
            user_id:user?.id,
            game_id:id
        };
        
        await dispatch(addNewPlayed(payload))

    }

    const removeGameFromPlayed = async(id) => {
        const payload = {
            user_id:user?.id,
            game_id:id
        };
        await dispatch(removePlayed(payload))
    }


        
    const addPlaying = async(id) => {
        
        const payload = {
            user_id:user?.id,
            game_id:id
        };
        
        await dispatch(addNewPlaying(payload))

    }

    const removeGameFromPlaying = async(id) => {
        const payload = {
            user_id:user?.id,
            game_id:id
        };
        await dispatch(removePlaying(payload))
    }



    const addGameWantToPlay = async(id) => {
        
        const payload = {
            user_id:user?.id,
            game_id:id
        };
        
        await dispatch(addWantToPlay(payload))
        
    }
    
    const removeGameFromWantToPlay = async(id) => {
        const payload = {
            user_id:user?.id,
            game_id:id
        };
        await dispatch(removeWantToPlay(payload))
    }
    
    const reviewClickHandler = async (value, gameId) => {
        const oldReview = user.reviews.find(review => review.game_id === gameId)
        let oldValue = oldReview ? oldReview.review : 0
        if(oldValue === +value){
            oldValue = -1
        }
        switch(oldValue){
            case 0:
                let payload = {
                    user_id: user?.id,
                    review: value,
                    game_id: gameId
                };
        
                await dispatch(addReview(payload))
                break
            case -1:
                await dispatch(deleteReview(oldReview.id))
                break
            default:
                let updatedPayload = {
                    id : oldReview.id,
                    review:value
                };

                await dispatch(updateReview(updatedPayload))
                break
        }
    } 

    const wtpToPlaying = (id) => {
        removeGameFromWantToPlay(id)
        addPlaying(id)
    }
    const playingToPlayed = (id) => {
        removeGameFromPlaying(id)
        addPlayed(id)
    }
    const playedToPlaying = (id) => {
        removeGameFromPlayed(id)
        addPlaying(id)
    }
    const playingToWTP = (id) => {
        removeGameFromPlaying(id)
        addGameWantToPlay(id)
    }


    
    useEffect(() => {
        
        for(let i = 0 ; i < user?.wantToPlay.length ; i++){
            
            let gameId = user?.wantToPlay[i]
            dispatch(getGame(gameId))
        }
        
        for(let i = 0 ; i < user?.playing.length ; i ++){
            let gameId = user?.playing[i]
            dispatch(getGame(gameId))
        }
        
        for(let i = 0 ; i < user?.played.length ; i++){
            let gameId = user?.played[i]
            dispatch(getGame(gameId))
        }
        
    },[dispatch, user])

    


    return(
        <div className="gamesLists">  
            <div className="gameList">
                <h3 className="gamesListHeader">WANT TO PLAY</h3>
                {wantToPlayGames.map(game =>
                        <div className="specificGame">
                            <h4 className="gameHeader">{game.name}</h4>
                            <button value={game.id} onClick={(e => removeGameFromWantToPlay(e.target.value))}>Remove</button>
                            <button value={game.id} onClick={(e => wtpToPlaying(e.target.value))}>Move to Playing</button>
                        </div> 
                )}
            </div>

            <div className="gameList" id="playingList">
                <h3 className="gamesListHeader">PLAYING</h3>
                {playingGames.map(game =>
                    <div className="specificGame">
                        <h4 className="gameHeader">{game.name}</h4>
                        <button value={game.id} onClick={(e => removeGameFromPlaying(e.target.value))}>Remove</button>
                        <button value={game.id} onClick={(e => playingToPlayed(e.target.value))}>Move to Played</button>
                        <button value={game.id} onClick={(e => playingToWTP(e.target.value))}>Move to Want to Play</button>
                    </div>
                )}
            </div>

            <div className="gameList">
                <h3 className="gamesListHeader">PLAYED</h3>
                {playedGames.map(game =>
                    <div className="specificGame">
                        <h4 className="gameHeader">{game.name}</h4>
                        <button value={game.id} onClick={(e => removeGameFromPlayed(e.target.value))}>Remove</button>
                        <button value={game.id} onClick={(e => playedToPlaying(e.target.value))}>Move to Playing</button>

                            <span>
                                <i class={` ${user.reviews.find(review => review.game_id === game.id)?.review >= 1 ? "fas fa-star rated" :'far fa-star'}`} id={1} onClick={e => reviewClickHandler(e.target.id, game.id)}></i>

                                <i class={`${user.reviews.find(review => review.game_id === game.id)?.review >= 2 ? "fas fa-star rated" :'far fa-star'}`} id={2} onClick={e => reviewClickHandler(e.target.id, game.id)}></i>

                                <i class={`${user.reviews.find(review => review.game_id === game.id)?.review >= 3 ? "fas fa-star rated" :'far fa-star'}`} id={3} onClick={e => reviewClickHandler(e.target.id, game.id)}></i>

                                <i class={`${user.reviews.find(review => review.game_id === game.id)?.review >= 4 ? "fas fa-star rated" :'far fa-star'}`} id={4} onClick={e => reviewClickHandler(e.target.id, game.id)}></i>

                                <i class={`far fa-star ${user.reviews.find(review => review.game_id === game.id)?.review >= 5 ? "fas fa-star rated" :'far fa-star'}`} id={5} onClick={e => reviewClickHandler(e.target.id, game.id)}></i>
                            </span>

                    </div>
                )}
            </div>
        </div>
    )

}


export default Lists