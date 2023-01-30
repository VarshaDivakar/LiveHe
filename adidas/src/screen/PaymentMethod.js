import React from "react";
import {View,Text, Image, StyleSheet, Pressable} from 'react-native';
import CustomButton from "../component/CustomButton";
import CustomTextInput from "../component/CustomTextInput";
import Dashboard from "../component/DashBoard";
import GradientBox from "../component/GradientBox";
import { COLORS, commonFontStyle, height } from "../constant/theme";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
export default function PaymentMethod(){
    const navigation = useNavigation();
    return(
        <Dashboard>
              <View style={[styles.pasteCardcontainer, {
                height: '78%',
                width: '90%',
                alignItems: 'center',
                paddingVertical: 25,
                //   backgroundColor:'yellow'
            }]}>
              <GradientBox
                    leftValue={15}
                    rightValue={50}
                    containerStyle={{
                        width: '70%',
                        height: 80,
                    }} />
                    <Text style={{
                        ...commonFontStyle(16,300,COLORS.gray1),
                        marginTop:30
                    }}>Saved Card</Text>

                    <CustomTextInput 
                    title={'Card No.'}
                    inputStyle={{ width:'65%'}}
                    lableStyle={{...commonFontStyle(14,800,COLORS.black2)}}
                    containerStyle={{marginTop:20}}
                    inputViewStyle={{height: 30}}
                    rightIcon ={
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            width:100
                        }}>
                            <Image 
                            style={style.card} 
                            resizeMode={'contain'}
                            source={require('../assets/images/Visa.png')}/>
                            <Image 
                            style={style.card} 
                            resizeMode={'contain'}
                            source={require('../assets/images/mcard.png')}/>
                            <Image 
                            style={style.card} 
                            resizeMode={'contain'}
                            source={require('../assets/images/PayPal.png')}/>
                            </View>
                    }
                    />
                     
                     <CustomButton 
                     containerStyle={{
                        marginTop:20,
                        marginBottom:30
                        
                     }}
                     title={'Proceed'}/>

                     <Text style={{
                        ...commonFontStyle(18,200,COLORS.gray1),
                        marginBottom:10
                     }}>Add Payment method</Text>
                     
                     <Pressable style={style.pressable}>
                        <Image source={require('../assets/images/Visa.png')}/>
                     </Pressable>


                     <Pressable onPress={()=> navigation.navigate('CardDetail')}
                      style={style.pressable}>
                        <Image 
                        resizeMode='contain'
                        style={style.pressableImage} 
                        source={require('../assets/images/mcard.png')}/>
                     </Pressable>
                     <Pressable style={style.pressable}>
                        <Image 
                         resizeMode='contain'
                        style={style.pressableImage} 
                        source={require('../assets/images/PayPal.png')}/>
                     </Pressable>
                     <Pressable style={[style.pressable,{flexDirection:'row', justifyContent:'center'}]}>
                        <Image 
                         resizeMode='contain'
                        style={style.pressableImage} 
                        source={require('../assets/images/card.png')}/>
                        <Text>Local Debit</Text>
                     </Pressable>
                     <Pressable style={[style.pressable,{flexDirection:'row', justifyContent:'center'}]}>
                        <Image 
                         resizeMode='contain'
                        style={style.pressableImage} 
                        source={require('../assets/images/card.png')}/>
                        <Text>Local Credit</Text>
                     </Pressable>
            </View>
        </Dashboard>
    )
}
const style = StyleSheet.create({
    card:{
        height:30,
        width:30,
        marginHorizontal:2
    },
    pressable:{
        width:'90%',
        borderColor:COLORS.primary,
        borderWidth:1,
        alignItems:'center',
        borderRadius:10,
        paddingVertical:3,
        height:35,
        marginVertical:5
    },
    pressableImage:{
        width:30,
        height:20,
        marginHorizontal:5
    },
})