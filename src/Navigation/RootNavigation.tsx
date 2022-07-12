import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../Types/NavigationTypes/RootStackScreens'

import AuthenticationStack from './Authentication/Authentication'
import AuthenticatedBottomtabRootNavigator from './Authenticated/AuthenticatedBottomnavigation'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store/store'

const Stack=createStackNavigator<RootStackParamList>()

const RootNavigation=()=>{

    const {verified}=useSelector((state:RootState)=>state.AuthReducer)
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            {!verified && <Stack.Screen name='Authentication' component={AuthenticationStack}/>}
            <Stack.Screen name='Authenticated' component={AuthenticatedBottomtabRootNavigator} />
        </Stack.Navigator>
    )
}

export default RootNavigation