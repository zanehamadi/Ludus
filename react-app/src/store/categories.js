const LOAD_CATEGORIES = 'games/LOAD_CATEGORIES'

const loadCategories = (categories) => ({
    type: LOAD_CATEGORIES,
    categories
});


export const getCategories = () => async (dispatch) => {
    const res = await fetch('/api/categories/');
    if (res.ok) {
        const categories = await res.json();
        dispatch((loadCategories(categories)))
    }
};


const initialState = {}
// let stateCopy = clone(state)

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CATEGORIES : {
            return { ...action.categories }
        }
        default:
            return state
    }
}

export default categoriesReducer



