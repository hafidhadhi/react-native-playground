import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

import { CIMB_ICON } from '../assets/images'

export default class CimbIcon extends Component {
    static propTypes = {

    }

    render() {
        return (
            <View style={styles(this.props).container}>
                <Image source={CIMB_ICON}
                    style={styles(this.props).image}
                />
                <View style={{ flex: 1 }} />
            </View>
        )
    }
}

const styles = (props) => StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 64,
        marginStart: 32,
        marginEnd: 32
    },
    image: {
        flex: 3,
        resizeMode: "contain"
    }
})
