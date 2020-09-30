import * as Type from './Constant_Redux/ActionType'

const initialState = {
    movies: [],
    moviesShow: [],
    phimDangchieu: true,
    phimSapchieu: false,
}
//Get_Trailer
function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
}

const moviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_MOVIES:

            state.movies = [...action.movies]
            state.moviesShow = [...action.movies.slice(0, 12)]
            return { ...state }

        case Type.SHOW_MOVIES:
            if (action.check === 0) {
                state.moviesShow = [...state.movies.slice(0, 6)]
            }
            else {
                state.moviesShow = [...state.movies.slice(6, 11)]
            }
            return { ...state }

        default:
            return state
    }
}
export default moviesReducers 