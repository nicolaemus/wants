import React, { Component, useState} from "react";
import { StyleSheet, View, Text,Button } from "react-native";
import store from "../js/store/index";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import { addCode } from "../js/actions";

const CELL_COUNT = 6;

function handleNavigation(code,{navigation}){
  store.dispatch(addCode(code.value));
  navigation.navigate('Name');
}

function OnBoardingConfirmPhone({route,navigation}) {
  

  const [value, setValue] = useState();
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });  
  const data = store.getState();
  console.log(data);
  return (
    
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.rect1}></View>
        <View style={styles.rect2}>
          <Text style={styles.mobileNumber}>Mobile Number</Text>
          <Text style={styles.verification}>Verification</Text>
          <Text style={styles.ots}>
            Enter your verification ha code. A 6-digit code has been sent on :
            {"\n"} {data.phone}
          </Text>
        </View>
        <View style={styles.rect3}>
          {/* style={styles.countryPhone} */}

               <CodeField
                     ref={ref}
                     {...props}
                     value={value}
                     onChangeText={setValue}
                     cellCount={CELL_COUNT}
                     rootStyle={styles.codeFiledRoot}
                     keyboardType="number-pad"
                     renderCell={({index, symbol, isFocused}) => (
                     <Text
                         key={index}
                       style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                       {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                     )}
                 />
        </View>
        <View style={styles.rect4}>
          <Text style={styles.bySigningUp}>
            If you did not received your verification code{"\n"}Tap to resend
            the code to this mobile
          </Text>
        </View>
      </View>
      <View style={styles.btnArea}>
        <View style={styles.brnArea1}>
        <Button
                 style={styles.nextScreen}
                 title="Next"
                 color="#FF0000"
                 //onPress={handleData({value})}
                 onPress={() => handleNavigation({value},{navigation})}
                 //onPress={()=>navigation.navigate('Name',{mobile:JSON.stringify({mobile}),code:{value}})}
                /> 
        </View>
        <View style={styles.btnArea2}></View>
        <View style={styles.btnArea3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  content: {
    flex: 0.59
  },
  rect1: {
    flex: 0.15
  },
  rect2: {
    flex: 0.40
  },
  mobileNumber: {
    color: "rgba(254,249,249,1)",
    alignSelf: "center",
    fontSize: 40,
    textAlign: "center"
  },
  verification: {
    color: "rgba(245,12,12,1)",
    alignSelf: "center",
    fontSize: 40,
    textAlign: "center"
  },
  ots: {
    width: 275,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    justifyContent: "space-between",
    fontSize: 16,
    textAlign: "center"
  },
  rect3: {
    flex: 0.15,
    justifyContent: "center",
    alignSelf:'center', 
  },
  countryPhone: {
    width: 250,
    height: 90,
    alignSelf: "center"
  },
  rect4: {
    flex: 0.15,
    justifyContent: "center"
  },
  bySigningUp: {
    height: 28,
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    alignSelf: "center"
  },
  btnArea: {
    flex: 0.41
  },
  brnArea1: {
    flex: 0.33,
    width:250,
    justifyContent: "center",
    alignSelf:"center"  },
  nextScreen: {
    borderRadius: 10,
  },
  btnArea2: {
    flex: 0.33
  },
  btnArea3: {
    flex: 0.34
  },
  codeFiledRoot: {marginTop: 20},
  cell: {
    color: '#FFFFFF',
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#00FF00',
  }
});

export default OnBoardingConfirmPhone;

// import React, {useState} from 'react';
// import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
// import {
//     CodeField,
//     Cursor,
//     useBlurOnFulfill,
//     useClearByFocusCell,
//   } from 'react-native-confirmation-code-field';

// const CELL_COUNT = 6;
// export default function OnBoardingCofirmPhone({route,navigation}) {
//   const {mobile} = route.params;
//   const [value, setValue] = useState();
//   const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
//   const [props, getCellOnLayoutHandler] = useClearByFocusCell({
//     value,
//     setValue,
//   });
//   return (
//     <View style={{flex: 1, 
//         flexDirection: 'column', 
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'stretch',
//         backgroundColor: '#303636'
//       }}>
//        <View style={{flex :3}}>
//           <View style={{flex :1, alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>
             
//           </View>
//           <View style={{flex :1, alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>
//               <Text style = {styles.bigTitleText}>Mobile Number</Text>
//               <Text style = {styles.bigTitleText}>Verification</Text>
//               <Text style = {styles.smallTitleText}> </Text>
//               <Text style = {styles.smallTitleText}>Enter your verification code. A 6-digit</Text>
//               <Text style = {styles.smallTitleText}>code has been sent to</Text>
//               <Text style = {styles.smallTitleText}>{mobile.value}</Text>
//           </View>
   
//           <View style={{flex :1, alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>
  
             
//               <View style={{flex :0.4, alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>
//               <CodeField
//                     ref={ref}
//                     {...props}
//                     value={value}
//                     onChangeText={setValue}
//                     cellCount={CELL_COUNT}
//                     rootStyle={styles.codeFiledRoot}
//                     keyboardType="number-pad"
//                     renderCell={({index, symbol, isFocused}) => (
//                     <Text
//                         key={index}
//                         style={[styles.cell, isFocused && styles.focusCell]}
//                         onLayout={getCellOnLayoutHandler(index)}>
//                         {symbol || (isFocused ? <Cursor /> : null)}
//                     </Text>
//                     )}
//                 />
//               </View>
//               <Text style = {styles.smallTitleText}> </Text>
//               <Text style = {styles.smallTitleText}>If you don't received your code</Text>
//               <Text style = {styles.smallTitleText}>Tap to resend your code</Text>
//               <Text style = {styles.smallTitleText}> </Text>
//           </View>
//       </View>
//         <View style={{flex :1, backgroundColor: '#303636'}}>
          
//           <View style={{flex :1, alignSelf:'center', width: '300px'}}>
//                   <Button
//                   color="#FF0000"
//                   title="Next"
//                   accessibilityLabel="Next"
//                   onPress={()=>navigation.navigate('Name', {mobile:JSON.stringify({mobile})} )} // if we put value from state then is ok
//                   /> 
//               </View>
//           <View style={{flex :1}}/>
//           <View style={{flex :1}}/>
//       </View>
//     </View>


  

  
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#303636',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     flex: 3,
//     alignItems: 'center',
//     marginLeft : '-175px'
//   },
//   bigTitleText: {
//     fontSize: 40,
//     fontWeight: "bold",
//     color:"#FFFFFF"
//   },
//   smallTitleText: {
//     fontSize: 15,
//     color:"#FFFFFF"
//   },
//   root: {flex: 1, padding: 20},
//   title: {textAlign: 'center', fontSize: 30},
//   codeFiledRoot: {marginTop: 20},
//   cell: {
//     color: '#FFFFFF',
//     width: 40,
//     height: 40,
//     lineHeight: 38,
//     fontSize: 24,
//     borderWidth: 2,
//     borderColor: '#00FF00',
//     textAlign: 'center',
//   },
//   focusCell: {
//     borderColor: '#00FF00',
//   },
// });