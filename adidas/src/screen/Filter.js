import React, { useState,useEffect } from "react";
import {View,Text, TouchableOpacity, StyleSheet, FlatList,BackHandler} from 'react-native';
import CustomButton from "../component/CustomButton";
import Dashboard from "../component/DashBoard";
import { COLORS, commonFontStyle, width } from "../constant/theme";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
export default function Filter(){
    const navigation = useNavigation();
    // useEffect(()=>{
    //     BackHandler.addEventListener(
    //         'hardwareBackPress',
    //        ()=> {navigation.goBack();
    //         return true;
    //     },
    //       );
    //   },[])
const [dummyData,setDummyData] = useState([
    {
        id:0,
        data : 'Apparel',
        isSelected : true
    },
    {
        id:1,
        data : 'Electronics',
        isSelected : false
    },
    {
        id:2,
        data : 'Food Beverages',
        isSelected : true
    },
    {
        id:3,
        data : 'Jewellery & Antics',
        isSelected : false
    },
    {
        id:4,
        data : 'Fitness',
        isSelected : true
    },
    {
        id:5,
        data : 'Cosmetics',
        isSelected : true
    },
   
])

    const onApplyPress = ()=>{

    }
const onFilterItemPress=(item)=>{
    const dD = dummyData;
dD[item.id].isSelected = !item.isSelected;
setDummyData([...dD])


}
    const filterList = ({item})=>{
        return(
              <TouchableOpacity onPress={()=> onFilterItemPress(item)}
              style={style.filterTouchView}>
                <View  style={[style.filterSelectIcon,
                {backgroundColor:item.isSelected ? COLORS.primary : null}]}/>
                <Text  style={{
                ...commonFontStyle(16,500,COLORS.gray1),}}>{item.data}</Text>
              </TouchableOpacity>
        )
    }
    return(
        <Dashboard number={6}>
            <View style={[styles.pasteCardcontainer, {
                height: '75%',
                width: width - 40,
                alignItems: 'center',
                paddingVertical: 50,
                  backgroundColor:COLORS.white,
                  opacity:0.87
            }]}>
             <Text style={{
                ...commonFontStyle(16,500,COLORS.gray1),
                marginBottom:40,
                alignSelf:'center'
             }}>Filter By Category</Text>
             <View style={{
                height:'70%'
             }}>
             <FlatList data ={dummyData}
             renderItem={filterList}
             showsVerticalScrollIndicator={false}
             pagingEnabled={true}
             />
</View>
             <CustomButton containerStyle={{
               height:55,
            //    position:'absolute',
            //    bottom:-90,
               alignSelf:'center'
             }} title={'Apply'} 
             onPress={onApplyPress}/>
              {/* {filterList()} */}
            </View>
        </Dashboard>
    )
}
const style= StyleSheet.create({
    filterSelectIcon:{
        height:20,
        width:20,
        borderWidth:2,
        borderColor:COLORS.primary,
        // backgroundColor:COLORS.primary,
        shadowColor:COLORS.black,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.6,
        marginRight:20,
        // elevation:3
    },
    filterTouchView:{
     flexDirection:'row',
     marginBottom:40,
     width:width-120,
    //  backgroundColor:'yellow',
     alignSelf:'center'
    }

})