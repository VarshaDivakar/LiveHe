import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constant/theme";
import { commonFontStyle } from "../../constant/theme";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../component/CustomButton";

export default function OTP() {
//   const dispatch = useDispatch();
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View 
    style={{
      flex:1,
      backgroundColor:COLORS.white
    }}
    // style={ApplicationStyles.applicationView}
    >
      <View style={styles.mainView}>
        <Text style={styles.title}>Verification Code Sent</Text>
        <Text style={styles.des}>Enter 6-digit code sent at</Text>
        <Text style={styles.phoneNumber}>+961 254 2578 255</Text>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={4}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />


       <CustomButton 
       title={'Resent Code'} 
       onPress={()=>{}}/>
        {/* <Text style={styles.resendTExt}>Resend Code</Text> */}
        <TouchableOpacity
          onPress={() => navigation.navigate("DashboardScreen")}
        //   style={[ApplicationStyles.orangeButton, styles.button]}
        >
          {/* <Text style={ApplicationStyles.orangeButtonText}>Verify</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    // flex:1,
    marginTop:30,
    paddingHorizontal: 30,
  },
  title: {
    ...commonFontStyle(25, 600, COLORS.black),
  },
  des: {
    ...commonFontStyle(16, 400, COLORS.gray1),
    marginVertical: 10,
  },
  phoneNumber: {
    ...commonFontStyle(16, 400, COLORS.gray1),
  },
  codeFieldRoot: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 5,
    marginHorizontal:20,
  },
  cellText: {
    textAlign: "center",
    ...commonFontStyle(25, 400, COLORS.black),
  },
  focusCell: {
    borderBottomColor: COLORS.orange,
    borderBottomWidth: 5,
  },
  resendTExt: {
    ...commonFontStyle(20, 500, COLORS.textGray),
    textAlign: "center",
    marginTop:50,
    marginBottom: 30,
  },
  button: {
    width: "55%",
    alignSelf: "center",
  },
});
