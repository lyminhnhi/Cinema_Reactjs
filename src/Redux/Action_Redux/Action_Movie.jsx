import * as Type from '../Constant_Redux/ActionType'
import * as url from '../../API/QuanLiPhim'
import {getAPI_async} from './GetAPI_Axios'

const urlLayDanhSachPhim=url.LayDanhSachPhim;

const method={
    method: 'get',
    url:urlLayDanhSachPhim
}
const getMovies=movies=>({
    type: Type.GET_MOVIES,
    movies
})

export const getMovies_async=()=>getAPI_async(method,getMovies)

export const showMovies=check=>({
    type: Type.SHOW_MOVIES,
    check
})
