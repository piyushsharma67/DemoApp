import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import InputBoxWithLabel from '../../../Components/InputComponent/InputBoxWithLabel'
import { theme } from '../../../utils/commonTheme'


interface props{
    state:{
        firstName:string,
        lastName:string,
        email:string,
        phoneNumber:string,
        DOB:string
    },
    onPress:(val:string,key:string)=>void
}

function PersonalDetailsForm(props:props) {


    return (
        <View style={{ flex: 1, width: '95%', alignSelf: 'center' ,marginTop:20}}>
            <View style={style.headingContainer}>
                <Text style={style.heading}>Personal Details</Text>
            </View>
            <View style={style.infoContainer}>
                <View style={style.rowContainer}>
                    <View style={style.inputContainer}>
                        <InputBoxWithLabel
                            value={props.state.firstName}
                            tag={'firstName'}
                            isLabel={false}
                            placeholder="First name"
                            onChangevalue={props.onPress} />
                    </View>
                    <View style={style.inputContainer}>
                        <InputBoxWithLabel
                            value={props.state.lastName}
                            tag={'lastName'}
                            isLabel={false}
                            placeholder="Last name"
                            onChangevalue={props.onPress} />
                    </View>
                </View>
                <View style={style.rowContainer}>
                    <View style={style.inputContainer}>
                        <InputBoxWithLabel
                            value={props.state.email}
                            isLabel={false}
                            tag={'email'}
                            placeholder="Email"
                            onChangevalue={props.onPress}/>
                    </View>
                </View>
                <View style={style.rowContainer}>
                    <View style={style.inputContainer}>
                        <InputBoxWithLabel
                            value={props.state.DOB}
                            tag={'DOB'}
                            placeholder="D.O.B"
                            isLabel={false}
                            onChangevalue={props.onPress}/>
                    </View>
                    <View style={style.inputContainer}>
                        <InputBoxWithLabel
                            value={props.state.phoneNumber}
                            tag={'phoneNumber'}
                            placeholder="Phone Number"
                            isLabel={false}
                            keyboardType="phone-pad"
                            onChangevalue={props.onPress}/>
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

export default PersonalDetailsForm
