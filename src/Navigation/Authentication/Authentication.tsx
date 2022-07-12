import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthenticationStackParamList } from '../../Types/NavigationTypes/Authentications/Authentication'
import SignUpScreen from '../../Screens/Authentication/Signup'
import LoginScreen from '../../Screens/Authentication/Login'

const Stack=createStackNavigator<AuthenticationStackParamList>()

function AuthenticationStack(){
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Signup">
            <Stack.Screen name="Signup" component={SignUpScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    )
}

export default AuthenticationStack
