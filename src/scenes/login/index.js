import React, { Component } from 'react';
import axios from 'axios';
import {
    ScrollView,
    View,
    Text,
    ToastAndroid
} from 'react-native';

import CimbIcon from '../../components/CimbIcon'
import UsernameInput from '../../components/UsernameInput'
import PasswordInput from '../../components/PasswordInput'
import LoginBtn from '../../components/LoginBtn'
import ForgotPwdBtn from '../../components/ForgotPwdBtn'

const showToast = (text) => {
    ToastAndroid.showWithGravity(
        text,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
}

export default class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    doLogin() {
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
                    <View style={{ flexDirection: "row", marginTop: 32, alignItems:"center" }}>
                        <ForgotPwdBtn onPress={() => navigation.navigate("example")} style={{ flex: 2, justifyContent: "center", alignItems: "flex-start" }}/>
                        <LoginBtn style={{ width: 100 }} onPress={() => this.doLogin()}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}