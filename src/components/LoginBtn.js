import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';
import PropTypes from 'prop-types'

export default class LoginBtn extends Component {
    static propTypes = {
        onPress: PropTypes.func,
        isEnabled: PropTypes.bool
    }

    render() {
        return (
            <View style={this.props.style}>
                <Button
                    title="Login"
                    color={ this.props.isEnabled? "#000FFF" : "#FF0000" }
                    disabled = { !this.props.isEnabled }
                    onPress={() => this.props.onPress()} />
            </View>
        )
    }
}

const styles = (props) => StyleSheet.create({

})