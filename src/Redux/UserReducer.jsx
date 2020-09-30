
import { FETCH_CREDENTIALS } from "../Redux/Constant_Redux/ActionType";

let initialState = {
    credentials: null
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CREDENTIALS: {
            state.credentials = action.payload;
            return { ...state }
        }
        default:
            return state
    }
}

export default UserReducer;