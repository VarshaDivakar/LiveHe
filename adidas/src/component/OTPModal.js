import React from "react";
import { View, Text, Modal, StyleSheet, Image, TextInput } from 'react-native';
import { COLORS, commonFontStyle } from "../constant/theme";

export default function OTPModal({
    modalVisible
}) {
    return (
       
        <Modal animationType="slide"
            transparent={true}
            // presentationStyle={'overFullScreen'}
            visible={modalVisible}
            // deviceHeight={'100%'}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                //   setModalVisible(!modalVisible)
            }}>
                {/* <View style={{flex:1,
               backgroundColor:'gray',
               opacity:0.3}}> */}
            <View style={style.modalInnerView}>
                <Text
                    style={{
                        ...commonFontStyle(16, 400, COLORS.gray1),
                        marginVertical: 20,
                    }}>
                    OTP </Text>
                    <TextInput style={{
                        borderBottomColor:COLORS.primary,
                        borderBottomWidth:1,
                        width:'50%',
                        height:50,
                    }}/>
             
               
               
            </View>
            {/* </View> */}
        </Modal>
        //  </View>
    )
}
const style = StyleSheet.create({
    lineView: {
        backgroundColor: COLORS.gray2,
        height: 1,
        width: 50
    },
    adidasLogo: {
        width: 60,
        height: 60
    },
    modalInnerView: {
        width: '80%',
        height: 250,
        backgroundColor: COLORS.white,
        position: 'absolute',
        bottom: '50%',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 50,
        justifyContent: 'space-evenly',
        alignSelf:'center',
        shadowColor:COLORS.black2,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.2
    }
})