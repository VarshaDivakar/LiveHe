import React from "react";
import { View, Text } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { COLORS, commonFontStyle, width } from "../constant/theme";
export default function GradientBox({ leftValue, rightValue,containerStyle }) {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#EA5297', '#B079B7', '#65ADE1', '#47C1F1']}
            style={{
                backgroundColor: 'linear-gradient(to right, #ea5297 43%, #47c1f1 99%)',
                height: 100,
                width: '95%',
                borderRadius: 15,
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                alignItems: 'center',
                shadowColor: COLORS.gray1,
                shadowOffset :{width:1,height:1},
                shadowOpacity:0.9,
                elevation:10,
                ...containerStyle
                // backgroundColor:COLORS.primary
            }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}>
                <Text style={{
                    ...commonFontStyle(45, 700, COLORS.white)
                }}> {leftValue}</Text>
                <Text style={{
                    ...commonFontStyle(10, 400, COLORS.white),
                }}>Lives</Text>
            </View>
            <View style={{
                height: 50,
                width: 1,
                backgroundColor: COLORS.white,
                opacity: 0.3
            }} />
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}>
                <Text style={{
                    ...commonFontStyle(45, 700, COLORS.white)
                }}> {rightValue}</Text>
                <Text style={{
                    ...commonFontStyle(10, 400, COLORS.white),
                }}>AED</Text>
            </View>
        </LinearGradient>

    )
}