import React,{useEffect} from "react";
import { View, Text, Image, StyleSheet, TextInput ,BackHandler} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomButton from "../component/CustomButton";
import Dashboard from "../component/DashBoard";
import { width, COLORS, height, commonFontStyle } from "../constant/theme";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
export default function ProductDetail() {
const navigation = useNavigation();
    const onPasswordPress = () => [

    ]
    // useEffect(()=>{
    //     BackHandler.addEventListener(
    //         'hardwareBackPress',
    //        ()=> {navigation.goBack();
    //         return true;
    //     },
    //       );
    //   },[])
    return (<Dashboard number={2} showGift={false} showSetting={false}>
        <View style={[styles.pasteCardcontainer, {
            height: '85%',
            width: '90%',
            alignItems: 'center',
            paddingVertical: 20,
            // backgroundColor:COLORS.primary
        }]}>
            <View style={style.logoView}>
                <Image style={{
                    height: width / 10,
                    width: width / 10
                }} resizeMode={'contain'}
                    source={require('../assets/images/adidas.png')} />
            </View>

            <View style={style.productView}>
                <Image style={{
                    width: width / 3,
                    height: width / 3
                }}
                    resizeMode={'contain'}
                    source={require('../assets/images/shirt.png')} />
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ ...commonFontStyle(14, 300, COLORS.gray1) }}>Arsenal Away Jersey</Text>
                    <Text style={{ ...commonFontStyle(14, 300, COLORS.gray1) }}>(Men)</Text>
                    <Text style={{ ...commonFontStyle(17, 400, COLORS.gray1) }}>Worth AED 70</Text>
                    <Text style={{
                        ...commonFontStyle(10, 400, COLORS.gray1),
                        marginTop: 10
                    }}>Ref code : 34DLGJ90</Text>
                </View>
            </View>
            <View style={{
                alignItems: 'center',
                // height: height / 4,
                // marginBottom:25,
                // borderColor:COLORS.primary,
                // borderWidth:1,
                // backgroundColor:COLORS.primary,
                elevation:5,
                shadowColor:COLORS.black,
                shadowOffset:{width:1,height:1},
                shadowOpacity:0.01,
                shadowRadius:5
        
            }}>
                <Image style={{
                    width: 35, height: 50,
                    position: 'absolute',
                    zIndex: 1,
                    top: -25

                }} resizeMode='contain' source={require('../assets/images/locationPoint.png')} />
                <View style={style.addressView}>
                    <Text style={{
                        ...commonFontStyle(10, 400, COLORS.gray1),
                        textAlign: 'center',
                        lineHeight: 15
                    }}>
                        {"Adidas Flagship store, Retail Unit GF325 A, \n Ground Floor, The Dubai Mall,\n Financial Center Street Dubai, UAE"}
                    </Text>

                    <Text style={{
                        ...commonFontStyle(20, 300, COLORS.gray1),
                        marginTop: 30
                    }}>Redeem</Text>

                    <View style={style.password}>
                        <TextInput placeholder="Password"
                            placeholderTextColor={COLORS.primary}
                            style={{ color: COLORS.primary }} />
                    </View>
                </View>
            </View>


<View style={{
    width:width/8,
    height:width/8,
    backgroundColor:COLORS.white,
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center',
    elevation:1,
    shadowColor:COLORS.black2,
    shadowOffset:{width:1,height:1},
    shadowOpacity:0.5,
    position:'absolute',
    bottom:15
    // borderColor:COLORS.gray1,
    // borderWidth:1,
    // marginTop:30,
    
}}>
            <Image style={{
                // marginTop:20
            }} source={require('../assets/images/locationDirection.png')} />
            </View>
        </View>
    </Dashboard>)
}
const style = StyleSheet.create({
    logoView: {
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: width / 3,
        height: width / 5,
        width: width / 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        height: height / 4,
        // backgroundColor:'yellow',
        alignItems: 'center',
        marginBottom: 10

    },
    addressView: {
        backgroundColor: COLORS.white,
        width: '90%',
        shadowColor: COLORS.gray1,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    password: {
        height: 40,
        width: width / 3,
        marginTop: 20,
        borderRadius: 10,
        borderBottomWidth: 0.19,
        borderLeftWidth: 0.19,
        borderRightWidth: 0.19,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'white',
        shadowOffset: { width: 10, height: 2 },
        opacity: 0.9,
        elevation: 50,
        marginTop: 50,
        backgroundColor: COLORS.white,

    }
})