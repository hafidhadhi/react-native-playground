import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExampleScreen from './scenes/example';
import LoginScreen from './scenes/login'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="example" component={ExampleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
