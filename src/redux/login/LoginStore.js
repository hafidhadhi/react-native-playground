import loginReducer from '../login/LoginReducer'
import { applyMiddleware, createStore } from 'redux'
import thunk from "redux-thunk" 

export default createStore(loginReducer, applyMiddleware(thunk)) 