import React from "react";
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, Pressable } from 'react-native';
import PasteBoard from "../component/PasteBoard";
import { height, width } from "../constant/theme";
import { styles } from '../styles';
import { useNavigation } from "@react-navigation/native";
export default function Dashboard({ number,
    showGift = true,
    showSetting = true,
    ...props }) {
        const navigation = useNavigation();
    console.log('width==>', width / 6.2)
    return (
        <View style={style.container}>
            <ImageBackground style={style.background} source={require('../assets/images/background.png')}>
                <SafeAreaView style={style.subContainer}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                    }}>
                        <View style={[styles.pasteCardcontainer, {
                            width: width / 1.38,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 20
                        }]}>
                            <TextInput
                                placeholder="Search brand" />
                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/images/menu.png')} />
                            </TouchableOpacity>
                        </View>
                        <Pressable onPress={()=> navigation.navigate('OutOfLives')}
                        style={[styles.pasteCardcontainer, {
                            width: width / 6.2,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }]}>

                            <Image source={require('../assets/images/zero.png')} />


                        </Pressable>
                    </View>

                    {props.children}

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        marginBottom: 20
                    }}>
                        {showSetting && <Pressable onPress={()=>navigation.navigate('Setting')}
                        style={[styles.pasteCardcontainer, {
                            width: width / 6.2,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }]}>
                            <Image source={require('../assets/images/setting.png')} />
                        </Pressable>
                        }

                        {showGift && <Pressable onPress={()=> navigation.navigate('WinningProducts')}
                        style={[styles.pasteCardcontainer, {
                            width: width / 6.2,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }]}>
                            <Image source={require('../assets/images/gift.png')} />
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
        justifyContent: 'space-between'
        // backgroundColor:'yellow'
    },
    background: {
        flex: 1,
        height: height,
        width: width,
        alignItems: 'center'
    },
})