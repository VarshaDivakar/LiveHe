import React from "react";
import {View,Text, Image, StyleSheet} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomButton from "../component/CustomButton";
import Dashboard from "../component/DashBoard";
import { width,COLORS,height, commonFontStyle } from "../constant/theme";
import { styles } from "../styles";

export default function ProductDetail(){
    return(<Dashboard number={2} showGift ={false} showSetting ={false}>
         <View style={[styles.pasteCardcontainer, {
                height: '85%',
                width: '90%',
                alignItems: 'center',
                padding:20
            }]}>
        <View style={style.logoView}>
        <Image style={{
            height: width/10,
            width:width/10
        }} resizeMode={'contain'}
        source={require('../assets/images/adidas.png')}/>
        </View>

        <View style={style.productView}>
            <Image style={{
                width: width/3,
                height: width/3
            }}
            resizeMode={'contain'}
             source={require('../assets/images/shirt.png')}/>
            <View style={{justifyContent:'center',
        alignItems:'center'}}>
                <Text style={{...commonFontStyle(14,300,COLORS.gray1)}}>Arsenal Away Jersey</Text>
                <Text style={{...commonFontStyle(14,300,COLORS.gray1)}}>(Men)</Text>
                <Text style={{...commonFontStyle(17,400,COLORS.gray1)}}>Worth AED 70</Text>
                <Text style={{
                    ...commonFontStyle(10,400,COLORS.gray1),
                    marginTop:10}}>Ref code : 34DLGJ90</Text>
            </View>
        </View>
         <View style={{
            alignItems:'center',
            height:height/3
         }}>
            <Image style={{
                width:35,height:50,
                position:'absolute',
                zIndex:1,
                top:-25

            }} resizeMode='contain' source={require('../assets/images/locationPoint.png')}/>
        <View style={style.addressView}>
            <Text style={{
                ...commonFontStyle(10,400,COLORS.gray1),
                textAlign:'center',
                lineHeight:15
            }}>
                {"Adidas Flagship store, Retail Unit GF325 A, \n Ground Floor, The Dubai Mall,\n Financial Center Street Dubai, UAE"}
            </Text>

            <Text style={{
                ...commonFontStyle(20,300,COLORS.gray1),
                marginTop:30
                }}>Redeem</Text>

            <CustomButton title={'Password'}/>
        </View>
        </View>
       
       <Image style={{
        // marginTop:20
       }} source={require('../assets/images/locationDirection.png')}/>
      </View>
    </Dashboard>)
}
const style = StyleSheet.create({
    logoView:{
       borderColor:COLORS.primary,
       borderWidth:1,
       borderRadius: width/3,
       height: width/5,
       width:width/5,
       justifyContent:'center',
       alignItems:'center'
    },
    productView:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-evenly',
        height:height/4.5,
        // backgroundColor:'yellow',
        alignItems:'center',
        marginBottom:20

    },
    addressView:{
        backgroundColor:COLORS.white,
        width:'90%',
        shadowColor: COLORS.gray1,
        shadowOffset :{width:1,height:1},
        shadowOpacity:0.9,
        justifyContent:'center',
        alignItems:'center',
        padding:30
    }
})