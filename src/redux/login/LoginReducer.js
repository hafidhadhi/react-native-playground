import { combineReducers } from 'redux'
import axios from 'axios';
import {
    ToastAndroid
} from 'react-native'

const INITIAL_STATE = {
    username: "",
    password: "",
    success: null,
    error: null
}

const showToast = (text) => {
    ToastAndroid.showWithGravity(
        String(text),
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
}

const doLogin = () => {
    console.log()
    //local "http://192.168.43.162:3001/test/pertama"
    axios.post("https://lively-glitter-9178.getsandbox.com:443/task1",
        {
            username: this.state.username,
            password: this.state.password
        }
    ).then(function (response) {
        console.log(response.data)
        showToast(JSON.stringify(response.data))
    }).catch(function (error) {
        console.log(error)
        showToast(error)
    })
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DO_LOGIN': {
            const { username, password } = action.payload
            console.log(username + password)
            //local "http://192.168.43.162:3001/test/pertama"
            axios.post("https://lively-glitter-9178.getsandbox.com:443/task1",
                {
                    username: username,
                    password: password
                }
            ).then(function (response) {
                const newState = { ...state, success: response.data }
                console.log(newState.success)
                showToast(newState.success.message)
                return newState
            }).catch(function (error) {
                const newState = { ...state, error: error }
                console.log(newState)
                showToast(newState.error)
                return newState
            })
        }
        default: return state
    }
}

export default combineReducers({
    login: loginReducer
})