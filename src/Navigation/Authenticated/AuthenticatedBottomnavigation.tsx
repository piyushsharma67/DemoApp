import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/Authenticated/Home';
import LoanScreen from '../../Screens/Authenticated/Loan';
import ProfileScreen from '../../Screens/Authenticated/Profile';
import SearchScreen from '../../Screens/Authenticated/Search';
import { AuthenticatedBottomTabParamList } from '../../Types/NavigationTypes/Authenticated/AuthenticatedBottomTabScreenType';
import { Icon } from 'react-native-elements';
import { theme } from '../../utils/commonTheme';

const Tabs=createBottomTabNavigator<AuthenticatedBottomTabParamList>()

function AuthenticatedBottomtabRootNavigator(){
    return (
        <Tabs.Navigator screenOptions={{headerShown:false}} defaultScreenOptions={{}}>
            <Tabs.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon: tabInfo => {
                      if (tabInfo.focused) {
                        return (
                         <Icon name="home" type="feather" size={25} color={theme.PRIMARY_COLOR} tvParallaxProperties/>
                        );
                      }
                      return (
                        <Icon name="home" type="feather" size={23} color={theme.DISABLED_COLOR} tvParallaxProperties/>
                      );
                    },
                    unmountOnBlur: true,
                }}
            />
            <Tabs.Screen 
                name="Search" 
                component={SearchScreen}
                options={{
                    tabBarIcon: tabInfo => {
                      if (tabInfo.focused) {
                        return (
                         <Icon name="search" type="feather" size={25} color={theme.PRIMARY_COLOR} tvParallaxProperties/>
                        );
                      }
                      return (
                        <Icon name="search" type="feather" size={23} color={theme.DISABLED_COLOR} tvParallaxProperties/>
                      );
                    },
                    unmountOnBlur: true,
                }}
            />
            <Tabs.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarIcon: tabInfo => {
                      if (tabInfo.focused) {
                        return (
                         <Icon name="user" type="feather" size={25} color={theme.PRIMARY_COLOR} tvParallaxProperties/>
                        );
                      }
                      return (
                        <Icon name="user" type="feather" size={23} color={theme.DISABLED_COLOR} tvParallaxProperties/>
                      );
                    },
                    unmountOnBlur: true,
                }}
            />
            <Tabs.Screen 
                name="Loan" 
                component={LoanScreen}
                options={{
                    tabBarIcon: tabInfo => {
                      if (tabInfo.focused) {
                        return (
                         <Icon name="dollar-sign" type="feather" size={25} color={theme.PRIMARY_COLOR} tvParallaxProperties/>
                        );
                      }
                      return (
                        <Icon name="dollar-sign" type="feather" size={23} color={theme.DISABLED_COLOR} tvParallaxProperties/>
                      );
                    },
                    unmountOnBlur: true,
                }}
            />
        </Tabs.Navigator>
    )
}

export default AuthenticatedBottomtabRootNavigator