import React ,{ useState } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ButtonCustom from '../../../Components/Button/button'
import InputBoxWithLabel from '../../../Components/InputComponent/InputBoxWithLabel'
import { theme } from '../../../utils/commonTheme'


const LoginScreen=()=>{

    const [buttonDisabled,setIsButtonDisabled]=useState(false)
    const [key,setKey]=useState("")


    return (
        <View style={{flex:1,backgroundColor:'white'}}>

            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:0.7,marginVertical:20}}>
                    <Text style={{fontSize:theme.FONT_LARGE,color:theme.PRIMARY_COLOR}}>Shyft Bank</Text>
                </View>
                <View style={{flex:0.4}}> 
                    <Text style={{fontSize:theme.FONT_MEDIUM,color:'black',textDecorationLine:'underline'}}>SignUp</Text>
                </View>
            </View>

            <View style={{flex:2,width:'70%',alignSelf:'center'}}>
                <InputBoxWithLabel labelName='Email' key="email" tag={''} onChangevalue={function (val: string, key: string): void {
                    throw new Error('Function not implemented.')
                } } />
                <InputBoxWithLabel labelName='password' key="password" />
                <View style={{width:'40%',height:'10%',alignSelf:'center'}}>
                    <ButtonCustom text={'Login'} disabled={false} onPress={()=>console.log("pressed")} />
                </View>
            </View>

        </View>
    )
}


export default LoginScreen