import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types'

export default class ForgotPwdBtn extends Component {
    static propTypes = {
        onPress: PropTypes.func
    }

    render() {
        return (
            <View 
            style={{ ...this.props.style, height: 30, width: 150 }}
            onTouchEnd={() => { this.props.onPress() }}>
                <Text style={styles(this.props).text}>Forgot Password</Text>
            </View>
        )
    }
}

const styles = (props) => StyleSheet.create({
    text: { fontSize: 11, color: "#FF0000"}
})