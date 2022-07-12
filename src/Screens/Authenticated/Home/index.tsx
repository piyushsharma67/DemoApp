import React from 'react'
import {View,Text} from 'react-native'
import { theme } from '../../../utils/commonTheme'

function HomeScreen(){
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:theme.PRIMARY_COLOR,fontSize:theme.FONT_MEDIUM}}>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen