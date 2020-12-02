import axios from 'axios'

export const doLogin = (userInfo) => async dispatch => {

    //local "http://192.168.43.162:3001/test/pertama"
    axios.post("https://lively-glitter-9178.getsandbox.com:443/task1",
        {
            username: userInfo.username,
            password: userInfo.password
        }
    ).then(function (response) {
        console.log(response.data)
        dispatch (
            {
                type: 'DO_LOGIN',
                payload: userInfo,
                success: response.data,
                error: null
            }
        )
    }).catch(function (error) {
        console.log(error)
        dispatch (
            {
                type: 'DO_LOGIN',
                payload: userInfo,
                success: null,
                error: error
            }
        )
    })
}