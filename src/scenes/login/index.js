import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    ToastAndroid
} from 'react-native';
import { connect } from 'react-redux';
import { doLogin } from '../../redux/login/LoginActions'

import CimbIcon from '../../components/CimbIcon'
import UsernameInput from '../../components/UsernameInput'
import PasswordInput from '../../components/PasswordInput'
import LoginBtn from '../../components/LoginBtn'
import ForgotPwdBtn from '../../components/ForgotPwdBtn'

const showToast = (text) => {
    ToastAndroid.showWithGravity(
        String(text),
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
}

class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    doLogin() {
        this.props.doLogin({ 
            username: this.state.username, 
            password: this.state.password 
        })
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        const login = this.props.login
        console.log(this.props.login)
        if (prevProps != this.props) {
            if (login.success != null) {
                showToast(login.success.message)
            }
            if (login.error != null) {
                showToast(login.error)
            }
        }
    }

    _renderErrorMsg() {
        const { success, error } = this.props.login
        if (success != null && success.status != "00") {
            return (
                <Text style={{ fontSize: 11, color: "#FF0000" }}>
                    { success.message }
                </Text>
            )
        } else return
    }

    render() {
        const { navigation } = this.props
        return (
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, backgroundColor: "#F0F0F0" }}>
                <CimbIcon />
                <View style={{ margin: 32, elevation: 1, borderRadius: 10, backgroundColor: "#FFFFFF", justifyContent: "space-around", padding: 24 }}>
                    <Text style={{ fontSize: 14 }}>Welcome to</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Sistem Informasi ATM Business</Text>
                    <UsernameInput onChangeText={(text) => this.setState({ username: text })} />
                    <PasswordInput onChangeText={(text) => this.setState({ password: text })} />
                    {this._renderErrorMsg()}
                    <View style={{ flexDirection: "row", marginTop: 32, alignItems: "center" }}>
                        <ForgotPwdBtn onPress={() => navigation.navigate("example")} style={{ flex: 2, justifyContent: "center", alignItems: "flex-start" }} />
                        <LoginBtn style={{ width: 100 }} onPress={() => this.doLogin()} isEnabled={this.state.username != "" && this.state.password != ""} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    const { login } = state
    return { login }
}

export default connect(mapStateToProps, { doLogin })(LoginScreen)