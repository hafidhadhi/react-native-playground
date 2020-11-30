import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Button,
    TextInput
} from 'react-native';
import CardView from 'react-native-cardview'
import { round } from 'react-native-reanimated'
import { CIMB_ICON } from '../../assets/images'

function LoginScreen({ navigation }) {
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1, backgroundColor: "#F0F0F0" }}>
            <View style={{ flexDirection: "row", marginTop: 64, marginStart: 32, marginEnd: 32 }}>
                <Image
                    source={CIMB_ICON}
                    style={{ flex: 3, resizeMode: "contain" }}
                />
                <View style={{ flex: 1 }} />
            </View>
            <View style={{ margin: 32, elevation: 1, borderRadius: 10, backgroundColor: "#FFFFFF", justifyContent: "space-around", padding: 24 }}>
                <Text style={{ fontSize: 14 }}>Welcome to</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Sistem Informasi ATM Business</Text>
                <View style={{ marginTop: 32, flexDirection:"row" }}>
                    <TextInput style={{flex:1}} placeholder="Username/email"/>
                </View>
                <TextInput placeholder="Password"/>
                <View style={{ flexDirection: "row", marginTop: 32 }}>
                    <View style={{ flex: 2, justifyContent: "center", alignItems: "flex-start" }}>
                        <Text
                            style={{ fontSize: 11, color: "#FF0000" }}
                            onPress={() => navigation.navigate("example")}>Forgot Password</Text>
                    </View>
                    <View style={{ width: 100 }}>
                        <Button
                        title="Login"
                            onPress={() => navigation.navigate("example")}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default LoginScreen