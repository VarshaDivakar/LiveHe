import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PasteBoard(){
    return(
        <View style={style.container}>
        <Text>hello</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        backgroundColor:'#F0F0EF',
        borderColor:'#8B8069',
        borderWidth:1,
        height:100,
        width:'90%'
        
    }
})