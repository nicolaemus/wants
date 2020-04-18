import React, { Component } from "react";
import { StyleSheet, View, Image, Button } from "react-native";

import store from "../js/store/index";

function OnBoardingSplash({navigation}) {
  return (
  <View style={styles.container}>
      <Image
        source={require("../assets/1.png")}
        //resizeMethod="stretch"
        style={styles.image}
      ></Image>
    <View style={styles.btnArea}>
      <View style={styles.brnArea1}>
        <Button
          color="#FF0000"
          title="Start with your Mobile"
          accessibilityLabel="Start with your mobile"
          onPress={()=>navigation.navigate('Begin')}
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
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
  backgroundColor: "rgba(0,0,0,1)"
},
image: {
  flex: 0.59,
  marginLeft : '-175px'
},
btnArea: {
  flex: 0.41
},
brnArea1: {
  flex: 0.33,
  width: 250,
  height: 50,
  justifyContent: "center",
  alignSelf:"center"
},
materialButtonDanger1: {
  width: 250,
  height: 50,
  borderRadius: 10,
  alignSelf: "center"
},
btnArea2: {
  flex: 0.33
},
btnArea3: {
  flex: 0.34
}
});

export default OnBoardingSplash;

// import React from 'react';
// import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
// import {Link} from 'react-router-dom'

// export default function OnBoardingSplash({navigation}) {
//   return (

//     <View style={{flex: 1, 
//       flexDirection: 'column', 
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'stretch',
//       backgroundColor: '#303636'
//     }}>
// <Image
//     style={ styles.image }
//     source={require('../assets/1.png') }
//   /> 
//       <View style={{flex :1, backgroundColor: '#303636'}}>
//         <View style={{flex :1}}/>
//         <View style={{flex :1, alignSelf:'center', width: '300px'}}>
//                 <Button
//                 color="#FF0000"
//                 title="Start with your Mobile"
//                 accessibilityLabel="Start with your mobile"
//                 onPress={()=>navigation.navigate('Begin')}
//                 /> 
//             </View>
//         <View style={{flex :1}}/>
//     </View>
//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#303636',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   item: {
//     flex: 3,
//     overflow: 'hidden',
//     alignItems: 'center',
//     backgroundColor: 'orange',
//     position: 'relative',
//     margin: 0
//   },

//   image: {
//     flex: 3,
//     alignItems: 'center',
//     marginLeft : '-175px'
//   }
// });