import React,{useEffect} from "react";
import { View, Text, ImageBackground, StyleSheet, Image,BackHandler, TouchableOpacity, Pressable } from 'react-native';
import { COLORS, commonFontStyle, width } from "../constant/theme";
import { styles } from "../styles";
import Icon from 'react-native-vector-icons/Entypo'
import { useNavigation } from "@react-navigation/native";
export default function Congrat() {
    const navigation = useNavigation();
    // useEffect(()=>{
    //     BackHandler.addEventListener(
    //         'hardwareBackPress',
    //        ()=> {navigation.goBack();
    //         return true;
    //     },
    //       );
    //   },[])
    return (
        <ImageBackground style={style.container}
            source={require('../assets/images/bg.png')}>
          
            <View style={[styles.pasteCardcontainer, {
                height: '75%',
                width: '90%',
                alignItems: 'center',
                // paddingVertical: 50,
                //   backgroundColor:'yellow'
            }]}>
                <Pressable  style={{
                    position:'absolute',
                    right:20,
                    top:20
                 }} onPress={()=> navigation.goBack()}>
                 <Icon name={'cross'} 
                 size={30} 
                 color={COLORS.primary}
                />
                 </Pressable>
                <View style={style.logoView}>
                    <Image style={{
                        height: width / 10,
                        width: width / 10
                    }} resizeMode={'contain'}
                        source={require('../assets/images/adidas.png')} />
                </View>
                <Text
                    style={{
                        ...commonFontStyle(16, 600, COLORS.primary)
                    }}>Congratulations !!</Text>

                <Image style={{
                    width: width / 1.5,
                    height: width / 1.5,
                    marginVertical: 20 }}
                    resizeMode={'contain'}
                    source={require('../assets/images/shirt.png')} />
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    <Text style={{ ...commonFontStyle(14, 300, COLORS.gray1) }}>Arsenal Away Jersey</Text>
                    <Text style={{ ...commonFontStyle(14, 300, COLORS.gray1) }}>(Men)</Text>
                    <Text style={{ ...commonFontStyle(17, 400, COLORS.gray1), marginTop: 10 }}>Worth AED 70</Text>


                    <TouchableOpacity style={{
                        marginTop: 50
                    }}>
                        <Text style={{
                            ...commonFontStyle(16, 400, COLORS.gray1),
                        }}>Terms and conditions</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoView: {
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: width / 3,
        height: width / 5,
        width: width / 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
})