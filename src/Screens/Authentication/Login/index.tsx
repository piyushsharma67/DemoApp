import React ,{ useState } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ButtonCustom from '../../../Components/Button/button'
import InputBoxWithLabel from '../../../Components/InputComponent/InputBoxWithLabel'
import { theme } from '../../../utils/commonTheme'


const LoginScreen=()=>{

    const [buttonDisabled,setIsButtonDisabled]=useState(false)
    const [key,setKey]=useState("")

    const keys={
        EMAIL:"Email",
        PASSWORD:"password",
        CONF_PASSWORD:"conf_password"
    }

    const [authDetails,setAuthDetails]=useState({
        email:"",
        password:'',
        confirm_password:""
    })

    const setFeild=(value:string,key:string)=>{
        
        switch(key){
            case keys.EMAIL:
                setAuthDetails({...authDetails,email:value})
                break;
            case keys.PASSWORD:
                setAuthDetails({...authDetails,password:value})
                break;
            default:
        }
    }


    return (
        <View style={{flex:1,backgroundColor:'white'}}>

            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:0.7,marginVertical:20}}>
                    <Text style={{fontSize:theme.FONT_LARGE,color:theme.PRIMARY_COLOR}}>Shyft Bank</Text>
                </View>
                <View style={{flex:0.4}}> 
                    <Text style={{fontSize:theme.FONT_MEDIUM,color:'black',textDecorationLine:'underline'}}>Login</Text>
                </View>
            </View>

            <View style={{flex:2,width:'70%',alignSelf:'center'}}>
            <InputBoxWithLabel 
                    labelName='Email' 
                    tag={keys.EMAIL} 
                    onChangevalue={setFeild} 
                    value={authDetails.email}
                    placeholder="Enter Email"
                    secureTextEntry={false}
                />
                <InputBoxWithLabel 
                    labelName='password' 
                    tag={keys.PASSWORD} 
                    onChangevalue={setFeild} 
                    value={authDetails.password}
                    placeholder="Enter password"
                    secureTextEntry={true}
                />
                <View style={{width:'40%',height:'10%',alignSelf:'center'}}>
                    <ButtonCustom text={'Login'} disabled={false} onPress={()=>console.log("pressed")} />
                </View>
            </View>

        </View>
    )
}


export default LoginScreen