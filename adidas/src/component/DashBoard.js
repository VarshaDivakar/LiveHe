import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, Pressable } from 'react-native';
import PasteBoard from "../component/PasteBoard";
import { COLORS, commonFontStyle, height, width } from "../constant/theme";
import { styles } from '../styles';
import { useNavigation } from "@react-navigation/native";
import AdidasComponent from "./AdidasComponent";
import CustomStatusBar from "./CustomStatusBar";
export default function Dashboard({ number,
    showGift = true,
    showSetting = true,
    ...props }) {
    const navigation = useNavigation();
    console.log('width==>', width / 6.2)
    const onAdidasIconClick = () => {
        navigation.navigate('StoreDetail');
    }
    const [numberImg, setNumberImg] = useState()

    useEffect(() => {
        if (number == 0)
            setNumberImg(require('../assets/images/zero.png'));
        else if (number == 2)
            setNumberImg(require('../assets/images/two.png'));
        else if (number == 5)
            setNumberImg(require('../assets/images/five.png'));
        else if (number == 6)
            setNumberImg(require('../assets/images/six.png'));
        else
            setNumberImg(require('../assets/images/zero.png'));
    }, [])
    return (
        <View style={style.container}>
            <CustomStatusBar/>
            <ImageBackground style={style.background} source={require('../assets/images/background.png')}>

                <SafeAreaView style={style.subContainer}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        
                    }}>
                        <View opacity={0.7} style={[styles.pasteCardcontainer, {
                            width: width / 1.34,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            height:55,
                            borderRadius:18
                            // backgroundColor:'white',
                            // opacity:0.8
                        }]}>
                            <TextInput
                                style={{ ...commonFontStyle(16, '300', COLORS.gray2) }}
                                placeholder="Search brands..."
                                placeholderTextColor={COLORS.gray2} />
                            <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
                                <Image
                                    source={require('../assets/images/menu.png')} />
                            </TouchableOpacity>
                        </View>
                        <Pressable onPress={() => navigation.navigate('OutOfLives')}
                            style={[styles.pasteCardcontainer, {
                                width: width / 7,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height:55,
                            borderRadius:15

                            }]}>

                            <Image style={{
                                width: 35,
                                height: 35,
                            }} resizeMode={'contain'} source={numberImg} />


                        </Pressable>
                    </View>
                    <Pressable style={{
                        position: 'absolute',
                        top: '50%',
                    }} onPress={() => navigation.navigate('Adidases')}>
                        <AdidasComponent onPress={onAdidasIconClick} containerStyle={{
                            width: 70,
                            height: 70,
                        }} imageStyle={{
                            width: 40,
                            height: 40,

                        }} />
                    </Pressable>
                    {props.children}

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        marginBottom: 30
                    }}>
                        {showSetting && <Pressable onPress={() => navigation.navigate('Setting')}
                            style={[styles.pasteCardcontainer, {
                                width: width / 6.2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                opacity: 0.8
                            }]}>
                            <Image source={require('../assets/images/setting.png')} />
                        </Pressable>
                        }

                        {showGift && <Pressable onPress={() => navigation.navigate('WinningProducts')}
                            style={[styles.pasteCardcontainer, {
                                width: width / 6.2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                opacity: 0.8
                            }]}>
                            <Image style={{
                                width: 35,
                                height: 35,
                            }} resizeMode="contain"
                                source={require('../assets/images/gift.png')} />
                        </Pressable>
                        }
                    </View>

                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:15
        // backgroundColor:'yellow'
    },
    background: {
        flex: 1,
        height: height,
        width: width,
        alignItems: 'center'
    },
})