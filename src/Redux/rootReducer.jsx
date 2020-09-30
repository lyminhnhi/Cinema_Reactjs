import {combineReducers} from "redux"
import moviesReducers from './SlideMovieReducer'
import MovieHookReducer from './MovieHookReducer'
import UserReducer  from './UserReducer'

export const rootReducer = combineReducers({moviesReducers,MovieHookReducer,UserReducer});