import { RETRIEVE_TOKEN, LOGIN, LOGOUT, REGISTER } from "../utils/constants"

//constants
const initialState = {
    loading: true,
    userToken: null
}

//reducer
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case RETRIEVE_TOKEN:
            return { ...state, userToken: action.token, loading: false }
        case LOGIN:
            return { ...state, userName: action.id , userToken: action.tokeb, loading: false }
        case LOGOUT:
            return { ...state, userName: null , userToken: null, loading: false }
        case REGISTER:
            return { ...state, userName: action.id , userToken: action.tokeb, loading: false }
        default:
            return state;
    }
}
//actions