import Axios from 'axios'

export const getAPI_async = (method,action) => dispatch => {
    return Axios(method)
    .then(respond => dispatch(action(respond.data)))
    .catch(err => console.log(err))
}

export const createAction = (type, payload) => ({
    type,
    payload
})
