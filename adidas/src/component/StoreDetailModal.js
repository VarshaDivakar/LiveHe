import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, commonFontStyle, width } from "../constant/theme";
import Modal from 'react-native-modal';
export default function StoreDetailModal({
    modalVisible,
    onClose
}) {
    return (
        <Modal animationType="slide"
            transparent={true}
            visible={modalVisible}
            swipeDirection={['down']}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            style={{
                flex:1,
               
            }}
            onRequestClose={() => {
                alert('Modal has been closed.');
                onClose();
            }}>
            <View style={style.modalInnerView}>
                <View style={style.lineView} />
                <Text
                    style={{
                        ...commonFontStyle(16, 400, COLORS.gray1),
                        marginVertical: 20,
                      
                    }}>
                    Store details
                </Text>
                <Image
                    style={style.adidasLogo}
                    resizeMode={'contain'}
                    source={require('../assets/images/adidas.png')} />
                <Text style={{
                    ...commonFontStyle(9, 400, COLORS.gray1),
                    lineHeight: 15,
                    textAlign: 'center',
                    marginTop: 20
                }}>
                    {"Adidas Flagship store, Retail Unit GF325 A, \n Ground Floor, The Dubai Mall, \n Financial Center Street, Dubai, UAE "}
                </Text>
            </View>
        </Modal>
        // </View>
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
        width: width,
        // height: 250,
        backgroundColor: COLORS.white,
        position: 'absolute',
        bottom: 0,
        left:-20,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 50,
        justifyContent: 'space-evenly',
        // marginLeft: -20
    },
})