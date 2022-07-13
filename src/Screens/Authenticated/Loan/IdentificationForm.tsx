import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import InputBoxWithLabel from '../../../Components/InputComponent/InputBoxWithLabel'
import { theme } from '../../../utils/commonTheme'
import {CheckBox} from 'react-native-elements'

interface props{
    state:{
        residentialProof:{
            driverLicense:boolean,
            stateID:boolean,
            usMilitary:boolean,
            usPassport:boolean
        },
        idNumber:string,
        idState:string
    },
    onPress:(val:string,key:string)=>void,
    toggle:(key:string)=>void
}

function IdentificationForm(props:props){
    return (
        <View style={{ flex: 1, width: '95%', alignSelf: 'center' ,marginVertical:20}}>
        <View style={style.headingContainer}>
            <Text style={style.heading}>Identification</Text>
        </View>
        <View style={style.infoContainer}>
            <View style={style.rowContainer}>
                <View style={[style.inputContainer,{marginRight:0}]}>
                   <CheckBox 
                    center
                    title="Driver License"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={props.state.residentialProof.driverLicense}
                    onPress={()=>props.toggle('driverLicense')}
                   />
                </View>
                <View style={[style.inputContainer,{marginRight:0}]}>
                   <CheckBox 
                    center
                    title="State ID"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={props.state.residentialProof.stateID}
                    onPress={()=>props.toggle('stateID')}
                   />
                </View>
            </View>
            <View style={style.rowContainer}>
            <View style={[style.inputContainer,{marginRight:0}]}>
                   <CheckBox 
                    center
                    title="US Military"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={props.state.residentialProof.usMilitary}
                    onPress={()=>props.toggle('usMilitary')}
                   />
                </View>
                <View style={[style.inputContainer,{marginRight:0}]}>
                   <CheckBox 
                    center
                    title="US passport"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={props.state.residentialProof.usPassport}
                    onPress={()=>props.toggle('usPassport')}
                   />
                </View>
            </View>
            <View style={style.rowContainer}>
                <View style={style.inputContainer}>
                    <InputBoxWithLabel
                        // value={props.state.state}
                        tag={'idNumber'}
                        placeholder="ID number"
                        isLabel={false}
                        onChangevalue={props.onPress} />
                </View>
                <View style={style.inputContainer}>
                    <InputBoxWithLabel
                        // value={props.state.state}
                        tag={'idState'}
                        placeholder="ID State"
                        isLabel={false}
                        onChangevalue={props.onPress} />
                </View>
            </View>
        </View>
    </View>
)
}

const style = StyleSheet.create({
    headingContainer: { 
        flex: 0.17, 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'flex-start' 
    },
    heading: { 
        fontSize: theme.FONT_MEDIUM, 
        fontWeight: 'bold', 
        color: 'black' ,
        textDecorationLine:'underline'
    },
    infoContainer: {
        flex: 1,
    },
    rowContainer: {
        flexDirection: 'row', 
        flex: 1, 
        justifyContent: 'space-between'
    },
    inputContainer: { 
        flex: 1, 
        marginRight: 5 
    }
})

export default IdentificationForm
