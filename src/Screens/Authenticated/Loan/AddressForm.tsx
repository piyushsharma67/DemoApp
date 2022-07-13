import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import InputBoxWithLabel from '../../../Components/InputComponent/InputBoxWithLabel'
import { theme } from '../../../utils/commonTheme'


interface props{
    state:{
        streetAddress:string,
        appartmentNumber:string,
        pincode:string,
        state:string
    },
    onPress:(val:string,key:string)=>void
}


function AddressForm(props :props){

    return (
        <View style={{ flex: 1, width: '95%', alignSelf: 'center' ,marginTop:20}}>
        <View style={style.headingContainer}>
            <Text style={style.heading}>Address</Text>
        </View>
        <View style={style.infoContainer}>
            <View style={style.rowContainer}>
                <View style={style.inputContainer}>
                    <InputBoxWithLabel
                        value={props.state.streetAddress}
                        tag={'streetAddress'}
                        isLabel={false}
                        placeholder="Street name"
                        onChangevalue={props.onPress} />
                </View>
            </View>
            <View style={style.rowContainer}>
                <View style={style.inputContainer}>
                    <InputBoxWithLabel
                        value={props.state.appartmentNumber}
                        isLabel={false}
                        tag={'appartmentNumber'}
                        placeholder="Appartment number"
                        onChangevalue={props.onPress}/>
                </View>
                <View style={style.inputContainer}>
                    <InputBoxWithLabel
                        value={props.state.pincode}
                        tag={'pincode'}
                        placeholder="Pincode"
                        isLabel={false}
                        onChangevalue={props.onPress} />
                </View>
            </View>
            <View style={style.rowContainer}>
                <View style={style.inputContainer}>
                    <InputBoxWithLabel
                        value={props.state.state}
                        tag={'state'}
                        placeholder="State"
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
        fontColor: 'black' 
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

export default AddressForm
