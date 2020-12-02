import { combineReducers } from 'redux'

const INITIAL_STATE = {
    success: null,
    error: null
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DO_LOGIN': {
            const { username, password } = action.payload
            console.log(username + password)
            return {
                ...state, 
                success: action.success, 
                error: action.error 
            }
        }
        default: return state
    }
}

export default combineReducers({
    login: loginReducer
})