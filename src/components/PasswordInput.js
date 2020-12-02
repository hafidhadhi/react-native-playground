import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types'

export default class PasswordInput extends Component {
    static propTypes = {
        onChangeText: PropTypes.func
    }

    render() {
        return (
            <View style={styles(this.props).container}>
                <TextInput style={styles(this.props).textInput} placeholder="Password" onChangeText={(text) => this.props.onChangeText(text)} />
            </View>
        )
    }
}

const styles = (props) => StyleSheet.create({
    container: {
        marginTop: 16,
        flexDirection: "row"
    },
    textInput: {
        flex: 1
    }
})
