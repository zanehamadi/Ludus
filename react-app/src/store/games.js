// import rfdc from 'rfdc'
// const clone = rfdc()

const GET_RESULTS = 'games/GET_RESULTS'
const ADD_GAME = 'games/ADD_GAME'


const addGame = (game) => ({
    type: ADD_GAME,
    game
});


const getResults = (filters) => ({
    type: GET_RESULTS,
    filters
})


export const searchRequest = (data) => async (dispatch) => {
    const res = await fetch('/api/games/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });


    if (res.ok) {
        
        const games = await res.json();
        await dispatch(getResults(games))
    }
}


export const getGame = (gameId) => async (dispatch) => {
    const res = await fetch(`/api/games/${gameId}`);
    if (res.ok){
        const game = await res.json();
        await dispatch((addGame(game)))
    }
}




const initialState = {}
// let stateCopy = clone(state)

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_RESULTS: {
            return{...action.filters}
        }
        case ADD_GAME:{
            let stateCopy = {...state}
            stateCopy[action.game.id] = action.game
            return stateCopy
        }
        default:
            return state
            
    }
}

export default gameReducer



