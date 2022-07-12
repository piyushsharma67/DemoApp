import React ,{ useEffect, useState } from 'react'
import { Alert } from 'react-native'
import {View,Text,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import ButtonCustom from '../../../Components/Button/button'
import InputBoxWithLabel from '../../../Components/InputComponent/InputBoxWithLabel'
import Loader from '../../../Components/Loader/Loader'
import { getAuthDetails } from '../../../Redux/reducers/authenticationReducer'
import { RootState } from '../../../Redux/store/store'
import { SignUpScreenProps } from '../../../Types/NavigationTypes/Authentications/Authentication'
import { theme } from '../../../utils/commonTheme'


const SignUpScreen=({route,navigation}:SignUpScreenProps)=>{

    const [Enabled,setButtonEnabled]=useState(false)

    const [authDetails,setAuthDetails]=useState({
        email:"",
        password:'',
        confirm_password:""
    })

    useEffect(()=>{
        if(authDetails.email!=="" && authDetails.email!=="" && authDetails.confirm_password!==""){
            setButtonEnabled(true)
        }else {
            setButtonEnabled(false)
        }

    },[authDetails.email,authDetails.password,authDetails.confirm_password])

    const {fetching}=useSelector((state:RootState)=>state.AuthReducer)

    const keys={
        EMAIL:"Email",
        PASSWORD:"password",
        CONF_PASSWORD:"conf_password"
    }

    const setFeild=(value:string,key:string)=>{
        
        switch(key){
            case keys.EMAIL:
                setAuthDetails({...authDetails,email:value})
                break;
            case keys.PASSWORD:
                setAuthDetails({...authDetails,password:value})
                break;
            case keys.CONF_PASSWORD:
                setAuthDetails({...authDetails,confirm_password:value})
                break;
            default:
        }
    }

    const dispatch=useDispatch()

    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <Loader loading={fetching}/>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:0.7,marginVertical:20}}>
                    <Text style={{fontSize:theme.FONT_LARGE,color:theme.PRIMARY_COLOR}}>Shyft Bank</Text>
                </View>
                <View style={{flex:0.4}}> 
                    <Text style={{fontSize:theme.FONT_MEDIUM,color:'black',textDecorationLine:'underline'}}>SignUp</Text>
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
                <InputBoxWithLabel 
                    labelName='Reconfirm password' 
                    tag={keys.CONF_PASSWORD} 
                    onChangevalue={setFeild} 
                    value={authDetails.confirm_password}
                    placeholder="confirm password"
                    secureTextEntry={true}
                />
                <View style={{width:'40%',height:'10%',alignSelf:'center'}}>
                    <ButtonCustom text={'SignUp'} disabled={Enabled} onPress={()=>{
                        const re = /\S+@\S+\.\S+/;
                        if(authDetails.password==="" || authDetails.password==="" || authDetails.confirm_password===""){
                            Alert.alert("Notification","input feilds cannot be left empty")
                        }else if(authDetails.password!==authDetails.confirm_password){
                            Alert.alert("Notification","passwords do not match")
                        }else if(!re.test(authDetails.email)){
                            Alert.alert("Notification","please enter a valid email")
                        }else {
                            dispatch(getAuthDetails())
                        }
                    }} />
                </View>

                <View style={{width:'70%',height:'10%',alignSelf:'center',justifyContent:'center',alignContent:'center',marginVertical:20}}>
                    <TouchableOpacity style={{width:'100%',height:'100%'}} onPress={()=>navigation.navigate('Login')}>
                        <Text style={{textAlign:'center',color:'black'}}>Already signed Up? please Login In</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}


export default SignUpScreen