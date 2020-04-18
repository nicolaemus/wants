import React, { Component,setState, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { render } from "react-dom";
import Select from 'react-select';
import makeAnimated from 'react-select/animated'
import {addKnows} from "../js/actions";
import store from "../js/store/index"; 

function handleNavigation(details,{navigation}){
  store.dispatch(addKnows(details.value));
  navigation.navigate('Contacts');
}

const options = [
	{ label: 'Constructions', value: 'Constructions' },
	{ label: 'Consultancy', value: 'Consultancy' },
  { label: 'Home Delivery', value: 'Home Delivery' },
  { label: 'Legal', value: 'Legal' },
	{ label: 'Transportation', value: 'Transportation' },
];
const animatedComponents = makeAnimated();

function OnBoardingDetails({route,navigation}) {
  const [value,setValue] = useState();  
  return(
  <View style={styles.container}>
    <View style={styles.content}>
    <View style={styles.rect1}/>             
    <View style={styles.rect2}>
      <Text style={styles.turnOn}>Tap a few</Text>
      <Text style={styles.verification}>things you know.</Text>
    </View>
    <View style={styles.rect3}>
      <Select
          menuPortalTarget={document.querySelector('body')}
          closeMenuOnSelect={false}
          components={animatedComponents}
          options={options}
          isMulti
          onChange={setValue}
          value={value}
          theme={(theme) => ({
            ...theme,
            borderRadius: 1,
            colors: {
            ...theme.colors,
              text: 'orangered',
              primary25: 'hotpink',
              primary: 'black',
            },
          })}
      />
    </View>
    <View style={styles.rect4}>

    </View>
  </View>
    <View style={styles.btnArea}>
    <View style={styles.brnArea1}>
    <Button style={styles.nextScreen}
                color="#FF0000"
                title="Next"
                accessibilityLabel="Next"
                onPress={()=>handleNavigation({value},{navigation})}
      
      ></Button>
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
flex: 0.25
},
rect2: {
flex: 0.24
},
turnOn: {
color: "rgba(254,249,249,1)",
alignSelf: "center",
fontSize: 40,
textAlign: "center",
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
flex: 0.45,
width:250,
justifyContent: "center",
alignSelf:"center",
},
rect4: {
flex: 0.05,
},
turnOnNotifications: {
backgroundColor: "#FFFFFF",
borderRadius: 10,
},
btnArea: {
flex: 0.41
},
brnArea1: {
flex: 0.33,
width:250,
justifyContent: "center",
alignSelf:"center"
},
nextScreen: {
borderRadius: 10,
},
btnArea2: {
flex: 0.33
},
btnArea3: {
flex: 0.34
}
});
//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//         <View style={styles.rect1}>  
//         </View>
//         <View style={styles.rect2}>
//           <Text style={styles.tapAFewThings}>Tap a few things</Text>
//           <Text style={styles.verification}>You Know.</Text>
//         </View>
//         <View style={styles.rect3}>
//           <View style={styles.rect5}>
//             <View style={styles.rectx1}>
//               <MaterialCheckboxWithLabel
//                 style={styles.chk1}
//               ></MaterialCheckboxWithLabel>
//             </View>
//             <View style={styles.rectx3}>
//               <MaterialCheckboxWithLabel
//                 style={styles.chk3}
//               ></MaterialCheckboxWithLabel>
//             </View>
//           </View>
//           <View style={styles.rect6}>
//             <View style={styles.rectx2}>
//               <MaterialCheckboxWithLabel
//                 style={styles.chk2}
//               ></MaterialCheckboxWithLabel>
//             </View>
//             <View style={styles.rectx4}>
//               <MaterialCheckboxWithLabel
//                 style={styles.chk4}
//               ></MaterialCheckboxWithLabel>
//             </View>
//           </View>
//         </View>
//         <View style={styles.rect4}>
//           <View style={styles.rect11}>
//             <View style={styles.rectx5}>
//               <MaterialCheckboxWithLabel
//                 style={styles.chk5}
//               ></MaterialCheckboxWithLabel>
//             </View>
//             <View style={styles.rectx7}>
//               <MaterialCheckboxWithLabel
//                 style={styles.chk7}
//               ></MaterialCheckboxWithLabel>
//             </View>
//           </View>
//           <View style={styles.rect12}>
//             <View style={styles.rectx6}>
//               <MaterialCheckboxWithLabel
//                 style={styles.chk6}
//               ></MaterialCheckboxWithLabel>
//             </View>
//             <View style={styles.rectx8}>
//               <MaterialCheckboxWithLabel
//                 style={styles.chk8}
//               ></MaterialCheckboxWithLabel>
//             </View>
//           </View>
//         </View>
//       </View>
//       <View style={styles.btnArea}>
//         <View style={styles.brnArea1}>
//           <Button style={styles.nextScreen}
//                     color="#FF0000"
//                     title="Next"
//                     accessibilityLabel="Next"
//                     onPress={()=>navigation.navigate('Contacts')}
          
//           ></Button>
//         </View>
//         <View style={styles.btnArea2}></View>
//         <View style={styles.btnArea3}></View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,1)"
//   },
//   content: {
//     flex: 0.59,
//     height: 0,
//     width: 0,
//     opacity: 0
//   },
//   rect1: {
//     flex: 0.25
//   },
//   rect2: {
//     flex: 0.24,
//     backgroundColor: "red"
//   },
//   tapAFewThings: {
//     color: "rgba(255,255,255,1)",
//     alignSelf: "center",
//     fontSize: 24,
//     textAlign: "center"
//   },
//   verification: {
//     color: "rgba(255,255,255,1)",
//     alignSelf: "center",
//     fontSize: 24,
//     textAlign: "center"
//   },
//   rect3: {
//     flex: 0.25,
//     backgroundColor: "rgba(230, 230, 230,1)",
//     flexDirection: "row"
//   },
//   rect5: {
//     flex: 0.5,
//     backgroundColor: "rgba(208, 208, 208,1)"
//   },
//   rectx1: {
//     flex: 0.5,
//     backgroundColor: "rgba(214, 214, 214,1)"
//   },
//   chk1: {
//     width: 90,
//     height: 40,
//     marginTop: 5,
//     marginLeft: 30
//   },
//   rectx3: {
//     flex: 0.5,
//     backgroundColor: "rgba(247, 247, 247,1)"
//   },
//   chk3: {
//     width: 90,
//     height: 40,
//     marginTop: 1,
//     marginLeft: 34
//   },
//   rect6: {
//     flex: 0.5,
//     backgroundColor: "rgba(245, 245, 245,1)"
//   },
//   rectx2: {
//     flex: 0.5,
//     backgroundColor: "rgba(234, 234, 234,1)"
//   },
//   chk2: {
//     width: 90,
//     height: 40,
//     marginTop: 5,
//     marginLeft: 55
//   },
//   rectx4: {
//     flex: 0.5,
//     backgroundColor: "rgba(233, 233, 233,1)"
//   },
//   chk4: {
//     width: 90,
//     height: 40,
//     marginTop: -1,
//     marginLeft: 55
//   },
//   rect4: {
//     flex: 0.25,
//     backgroundColor: "rgba(95,87,87,1)",
//     flexDirection: "row"
//   },
//   rect11: {
//     flex: 0.5,
//     backgroundColor: "rgba(250, 250, 250,1)"
//   },
//   rectx5: {
//     flex: 0.5,
//     backgroundColor: "rgba(220, 220, 220,1)"
//   },
//   chk5: {
//     width: 90,
//     height: 40,
//     marginTop: 11,
//     marginLeft: 44
//   },
//   rectx7: {
//     flex: 0.5,
//     backgroundColor: "rgba(211, 211, 211,1)"
//   },
//   chk7: {
//     width: 90,
//     height: 40,
//     marginTop: 6,
//     marginLeft: 40
//   },
//   rect12: {
//     flex: 0.5,
//     backgroundColor: "rgba(240, 240, 240,1)"
//   },
//   rectx6: {
//     flex: 0.5,
//     backgroundColor: "rgba(223, 223, 223,1)"
//   },
//   chk6: {
//     width: 90,
//     height: 40,
//     marginTop: 11,
//     marginLeft: 65
//   },
//   rectx8: {
//     flex: 0.5,
//     backgroundColor: "rgba(232, 232, 232,1)"
//   },
//   chk8: {
//     width: 90,
//     height: 40,
//     marginTop: 2,
//     marginLeft: 69
//   },
//   btnArea: {
//     flex: 0.41
//   },
//   brnArea1: {
//     flex: 0.33,
//     width: 250,
//     justifyContent: "center",
//     alignSelf:"center"
//   },
//   nextScreen: {
//     borderRadius: 10
//   },
//   btnArea2: {
//     flex: 0.33
//   },
//   btnArea3: {
//     flex: 0.34
//   }
// });

export default OnBoardingDetails;

// import React, {useState, Component} from 'react';
// import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, ActivityIndicatorBase} from 'react-native';
// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'
// import { TextInput } from 'react-native-gesture-handler';

// export default class OnBoardingDetails extends Component {
 
//     constructor(props){
//         super(props)
//     }

//   render(){
// const {mobile,nume} = this.props.route.params;
//   return (
//     <View style={{flex: 1, 
//       flexDirection: 'column', 
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'stretch',
//       backgroundColor: '#303636'
//     }}>
//      <View style={{flex :3}}>
//         <View style={{flex :1, alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>
        
//         </View>
//         <View style={{flex :1, alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>
//             <Text style = {styles.midTitleText}>Tap a few things</Text>
//             <Text style = {styles.midTitleText}>you KNOW. </Text>
//             <Text style = {styles.midTitleText}>{mobile} and {nume} </Text>
//         </View>

//         <View style={{flex :1, alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>

           
//             <View style={{flex :1, borderWidth:'1px', borderColor:'#00FF00', alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>
               
           
            


//             </View>
//             <Text style = {styles.smallTitleText}> </Text>
//             <Text style = {styles.smallTitleText}>Add Photo</Text>
//             <Text style = {styles.smallTitleText}></Text>
//         </View>
//     </View>
//       <View style={{flex :1, backgroundColor: '#303636'}}>
//       <Text style = {styles.smallTitleText}> </Text>
//         <View style={{flex :1, alignSelf:'center', width: '300px'}}>
//                 <Button
//                 color="#FF0000"
//                 title="Next"
//                 accessibilityLabel="Next"
//                 //onPress={()=>navigation.navigate('Confirm')}
//                 /> 
//             </View>
//         <View style={{flex :1}}/>
//         <View style={{flex :1}}/>
//     </View>
//   </View>
//   );
// }
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
//   midTitleText: {
//     fontSize: 30,
//     color:"#FFFFFF"
//   }
// });