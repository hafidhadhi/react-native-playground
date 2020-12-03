import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types'
import FeatherIcon from 'react-native-vector-icons/Feather'

export default class UsernameInput extends Component {

    static propTypes = {
        onChangeText: PropTypes.func
    }

    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    render() {
        return (
            <View style={styles(this.props).container}>
                <TextInput style={styles(this.props).textInput} placeholder="Username/email" onChangeText={(text) => this.props.onChangeText(text)} />
                <FeatherIcon name="mail" size={30} color="#C0C0C0" style={styles(this.props).icon} />
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
