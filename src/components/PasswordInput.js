import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import PropTypes from 'prop-types'

export default class PasswordInput extends Component {
    static propTypes = {
        onChangeText: PropTypes.func
    }

    render() {
        return (
            <View style={styles(this.props).container}>
                <TextInput style={styles(this.props).textInput} placeholder="Password" onChangeText={(text) => this.props.onChangeText(text)} />
                <FeatherIcon name="lock" size={30} color="#C0C0C0" style={styles(this.props).icon} />
            </View>
        )
    }
}

const styles = (props) => StyleSheet.create({
    container: {
        marginTop: 16,
        flexDirection: "row",   
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#C0C0C0",
        backgroundColor: "#FCFCFC"
    },
    textInput: {
        flex: 1
    },
    icon: {
        margin: 8
    }
})
