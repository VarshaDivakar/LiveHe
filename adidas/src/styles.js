import { StyleSheet } from "react-native";
import { COLORS, width } from "./constant/theme";
export const styles = StyleSheet.create({
    pasteCardcontainer:{
        // backgroundColor:'#ffffff',
        backgroundColor:'rgba(255, 255, 255, 0.87)',
        borderColor:'#8B8069',
        borderWidth:1,
        height:width/6.2,
        borderRadius:10,
        // opacity:0.8,
        shadowColor:COLORS.black,
        shadowOffset:{width:2,height:2},
        shadowOpacity:0.7,
        shadowRadius:5,
        elevation:0.2
       
        // width:'90%'
    }
})

