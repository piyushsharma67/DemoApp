import React from 'react'
import {View,Text} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../Components/Button/button'
import { RootState } from '../../../Redux/store/store'
import { theme } from '../../../utils/commonTheme'

function ProfileScreen(){
    const {name}=useSelector((state:RootState)=>state.AuthReducer)
    const dispatch=useDispatch()

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:theme.PRIMARY_COLOR,fontSize:theme.FONT_MEDIUM}}>Hi {name}</Text>
            <View style={{marginTop:20,width:'50%',height:50}}>
                <Button text={'Logout'} onPress={()=>dispatch({type:'logout'})} disabled={false}/>
            </View>
        </View>
    )
}

export default ProfileScreen