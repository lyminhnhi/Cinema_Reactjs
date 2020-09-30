
import { createAction } from './GetAPI_Axios'
import { userService } from '../../Service_Hook/index'
import { FETCH_CREDENTIALS } from '../Constant_Redux/ActionType'

export const login = (user) => {
    return dispatch => {
        userService.signIn(user)
            .then(res => {
                dispatch(createAction(FETCH_CREDENTIALS, res.data));
                
                localStorage.setItem('credentials', JSON.stringify(res.data))

                localStorage.setItem('token', res.data.accessToken);

                localStorage.setItem('userLogin', res.data)

                alert("Đăng Nhập Thành Công");

            }).catch(err => {
                alert(err.response.data);
            })
    }
}

export const _handleSubmit = values => {
    userService.signUp(values)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}


