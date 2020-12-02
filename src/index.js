import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ExampleScreen from './scenes/example'
import LoginScreen from './scenes/login'
import loginStore from '../src/redux/login/LoginStore'
import { Provider } from 'react-redux'
import { Component } from 'react'

const Stack = createStackNavigator();

class App extends Component {
    render() {
        return (
            <Provider store={loginStore}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="example" component={ExampleScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }
}

export default App
