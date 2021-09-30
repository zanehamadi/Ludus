const LOAD_GENRES = 'games/LOAD_GENRES'

const loadGenres = (genres) => ({
    type: LOAD_GENRES,
    genres
});


export const getGenres = () => async (dispatch) => {
    const res = await fetch('/api/genres/');
    if (res.ok) {
        const genres = await res.json();
        dispatch((loadGenres(genres)))
    }
};


const initialState = {}
// let stateCopy = clone(state)

const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GENRES : {
            return { ...action.genres }
        }
        default:
            return state
    }
}

export default genresReducer



