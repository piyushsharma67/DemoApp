import React, { useState } from 'react'
import {View,Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/store/store'
import { theme } from '../../../utils/commonTheme'
import { width } from '../../../utils/dimension'
import AddressForm from './AddressForm'
import IdentificationForm from './IdentificationForm'
import PersonalDetailsForm from './personalDetailsForm'


function LoanScreen(){

    const {email}=useSelector((state:RootState)=>state.AuthReducer)

    interface state{
        personalDetails:{
            firstName:string,
            lastName:string,
            email:string,
            phoneNumber:string,
            DOB:string
        },
        address:{
            streetAddress:string,
            appartmentNumber:string,
            pincode:string,
            state:string
        },
        identification:{
            residentialProof:{
                driverLicense:boolean,
                stateID:boolean,
                usMilitary:boolean,
                usPassport:boolean
            },
            idNumber:string,
            idState:string
        }  
    }

    const [details,setDetails]=useState<state>({
        personalDetails:{
            firstName:"",
            lastName:"",
            email:email,
            phoneNumber:"",
            DOB:""
        },
        address:{
            streetAddress:"",
            appartmentNumber:"",
            pincode:"",
            state:''
        },
        identification:{
            residentialProof:{
                driverLicense:false,
                stateID:false,
                usMilitary:false,
                usPassport:false
            },
            idNumber:"",
            idState:""
        }
    })

    const setvalue=(val:string,key:string)=>{
        switch (key){
            case "firstName":
                setDetails({...details,personalDetails:{...details.personalDetails,firstName:val}})
                break
            case "lastName":
                setDetails({...details,personalDetails:{...details.personalDetails,lastName:val}})
                break
            case "email":
                setDetails({...details,personalDetails:{...details.personalDetails,email:val}})
                break
            case "phoneNumber":
                setDetails({...details,personalDetails:{...details.personalDetails,phoneNumber:val}})
                break
            case "DOB":
                setDetails({...details,personalDetails:{...details.personalDetails,DOB:val}})
                break
            case "streetAddress":
                setDetails({...details,address:{...details.address,streetAddress:val}})
                break
            case "appartmentNumber":
                setDetails({...details,address:{...details.address,appartmentNumber:val}})
                break
            case "pincode":
                setDetails({...details,address:{...details.address,pincode:val}})
                break
            case "state":
                setDetails({...details,address:{...details.address,state:val}})
                break
            case "idNumber":
                setDetails({...details,identification:{...details.identification,idNumber:val}})
                break
            case "idState":
                setDetails({...details,identification:{...details.identification,idState:val}})
                break
            default:
        }
    }

    function toggleSwitch(key:string){
        switch(key){
            case 'driverLicense':
                setDetails({...details,identification:{...details.identification,residentialProof:{...details.identification.residentialProof,driverLicense:!details.identification.residentialProof.driverLicense}}})
                break;
            case 'stateID':
                setDetails({...details,identification:{...details.identification,residentialProof:{...details.identification.residentialProof,stateID:!details.identification.residentialProof.stateID}}})
                break
            case 'usMilitary':
                setDetails({...details,identification:{...details.identification,residentialProof:{...details.identification.residentialProof,usMilitary:!details.identification.residentialProof.usMilitary}}})
                break
            case 'usPassport':
                setDetails({...details,identification:{...details.identification,residentialProof:{...details.identification.residentialProof,usPassport:!details.identification.residentialProof.usPassport}}})
                break
            default:
        }
    }

    return (
        <ScrollView style={{width:width,alignSelf:'center',backgroundColor:'white'}}>
            <View style={style.headingContainer}>
                <Text style={style.heading}>Customer Information</Text>
            </View>
            <PersonalDetailsForm state={details.personalDetails} onPress={setvalue}/>
            <AddressForm state={details.address} onPress={setvalue}/>
            <IdentificationForm state={details.identification} onPress={setvalue} toggle={toggleSwitch}/>
        </ScrollView>
    )
}

const style=StyleSheet.create({
    headingContainer:{
        flex:0.2,justifyContent:'center',alignItems:'center',marginTop:25
    },
    heading:{fontSize:theme.FONT_MEDIUM,color:theme.PRIMARY_COLOR,textDecorationLine:'underline'}
})

export default LoanScreen