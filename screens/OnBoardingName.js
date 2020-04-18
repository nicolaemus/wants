import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import store from "../js/store/index";
import { addName, addPhoto } from "../js/actions";
import ImagePickerUtil from '../components/ImagePickerUtil'

class OnBoardingName extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : "",
      image:null
    }
  }
  handleNavigation(){
    console.log(this.state.username)
    store.dispatch(addName(this.state.username));
 
    // const data = store.getState();
    // console.log(data);
    this.props.navigation.navigate('Details');
  }
  render(){

    let {username,image} = this.state;
    console.log(image);
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.rect1}>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.welcomeTo}>Hi,</Text>
                  <Text style={styles.welcomeTo}>Welcome to</Text>
            <Text style={styles.verification}>WANTS. </Text>
            </View>
          <View style={styles.rect3}>
          <TextInput 
                placeholder='Input your name' 
                placeholderTextColor='#FFFFFF' 
                onChangeText={text => this.setState({username:text})}
                style={{height: 40, width:250, borderColor: '#00FF00',  
                borderWidth: 1,color:"#FFFFFF",padding:10}}>
            </TextInput>
          </View>
          <View style={styles.rect4}>
          <ImagePickerUtil/>
          </View>
        </View>
        <View style={styles.btnArea}>
          <View style={styles.brnArea1}>
          <Button style={styles.nextScreen}
            color="#FF0000"
            title="Next"
            accessibilityLabel="Next"
            onPress={this.handleNavigation.bind(this)}
            
            ></Button>
          </View>
          <View style={styles.btnArea2}>

        
          </View>
          <View style={styles.btnArea3}></View>
        </View>
      </View>
  );
  }  
}

const styles = StyleSheet.create({
  btnPhoto: {
    width:250,
    backgroundColor: "rgba(0,0,0,1)"
  },
  container: {
     flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  content: {
    flex: 0.59
  },
  rect1: {
    flex: 0.10
  },
  rect2: {
    flex: 0.45,
    justifyContent:"flex-start",
  },
  hi: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    position: "absolute",
    fontSize: 40,
    textAlign: "center"
    
  },
  welcomeTo: {
    color: "rgba(254,249,249,1)",
    alignSelf: "center",
    fontSize: 40,
    textAlign: "center"
  },
  verification: {
    color: "rgba(245,12,12,1)",
    alignSelf: "center",
    fontSize: 30,
    textAlign: "center"
  },
  button: {
    flex: 0.25,
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center"
  },
  ellipse: {
    flex:1,
    width: 200,
    height: 200
  },
  rect3: {
    flex: 0.25,
    justifyContent: "flex-start",
    alignSelf: "center"
  },
  rect4: {
    flex: 0.19,
    width:250,
    justifyContent: "center",
    alignSelf: "center"
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
    alignSelf:"center",
  },
  nextScreen: {
    borderRadius: 10,
  },
  btnArea2: {
    flex: 0.33,

  },
  btnArea3: {
    flex: 0.34
  }
});

export default OnBoardingName;

// import React, { Component } from "react";
// import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
// import Svg, { Ellipse } from "react-native-svg";
// import MaterialButtonPink2 from "../components/MaterialButtonPink2";

// function OnBoardingName(props) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//         <View style={styles.rect1}></View>
//         <View style={styles.rect2}>
//           <Text style={styles.hi}>HI !</Text>
//           <Text style={styles.welcomeTo}>Welcome to</Text>
//           <Text style={styles.verification}>Wants.</Text>
//         </View>
//         <TouchableOpacity style={styles.button}>
//           <Svg viewBox="0 0 96.00 92.00" style={styles.ellipse}>
//             <Ellipse
//               strokeWidth={1}
//               fill="rgba(230, 230, 230,1)"
//               stroke="rgba(230, 230, 230,1)"
//               cx={48}
//               cy={46}
//               rx={48}
//               ry={46}
//             ></Ellipse>
//           </Svg>
//         </TouchableOpacity>
//         <View style={styles.rect4}>
//           <Text style={styles.bySigningUp}>Add Photo</Text>
//         </View>
//       </View>
//       <View style={styles.btnArea}>
//         <View style={styles.brnArea1}>
//           <MaterialButtonPink2 style={styles.nextScreen}></MaterialButtonPink2>
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
//     flex: 0.59
//   },
//   rect1: {
//     flex: 0.25
//   },
//   rect2: {
//     flex: 0.24
//   },
//   hi: {
//     top: -30,
//     left: 158,
//     color: "rgba(255,255,255,1)",
//     position: "absolute",
//     fontSize: 40,
//     fontFamily: "roboto-regular"
//   },
//   welcomeTo: {
//     color: "rgba(254,249,249,1)",
//     alignSelf: "center",
//     fontSize: 40,
//     fontFamily: "roboto-regular",
//     textAlign: "center"
//   },
//   verification: {
//     color: "rgba(245,12,12,1)",
//     alignSelf: "center",
//     fontSize: 40,
//     fontFamily: "roboto-700",
//     textAlign: "center"
//   },
//   button: {
//     flex: 0.25
//   },
//   ellipse: {
//     width: 96,
//     height: 92,
//     marginTop: 14,
//     marginLeft: 140
//   },
//   rect4: {
//     flex: 0.25,
//     justifyContent: "center"
//   },
//   bySigningUp: {
//     height: 28,
//     color: "rgba(255,255,255,1)",
//     fontFamily: "roboto-regular",
//     textAlign: "center",
//     alignSelf: "center"
//   },
//   btnArea: {
//     flex: 0.41
//   },
//   brnArea1: {
//     flex: 0.33,
//     justifyContent: "center"
//   },
//   nextScreen: {
//     width: 250,
//     height: 50,
//     borderRadius: 10,
//     borderColor: "#000000",
//     borderWidth: 0,
//     borderTopLeftRadius: 10,
//     alignSelf: "center"
//   },
//   btnArea2: {
//     flex: 0.33
//   },
//   btnArea3: {
//     flex: 0.34
//   }
// });

// export default OnBoardingName;

// // import React, {Component} from 'react';
// // import 'react-phone-number-input/style.css'
// // import { TextInput } from 'react-native-gesture-handler';
// // import { StyleSheet, Text, View, Button, Image } from 'react-native';

// // export default class OnBoardingName extends Component {
// //     static navigationOptions = {
// //         header: null // don't display header
// //       };
// //   constructor(props){
// //       super(props);
// //         this.state = {
// //             filePath: {},
// //             mobile:'07X',
// //             value:""
// //         };
         
// //    }

// //   render(){
// //       /* Deconstruct Params from route navigation */
// //   const { mobile } = this.props.route.params;
// //   this.state.mobile = {mobile};
// //   return (
// //     <View style={{flex: 1, 
// //       flexDirection: 'column', 
// //       flexDirection: 'column',
// //       justifyContent: 'center',
// //       alignItems: 'stretch',
// //       backgroundColor: '#303636'
// //     }}>
// //      <View style={{flex :3}}>
// //         <View style={{flex :1, alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>
        
// //         </View>
// //         <View style={{flex :1, alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>
// //             <Text style = {styles.midTitleText}>Welcome to WANTS. </Text>
           
// //             <Text style = {styles.smallTitleText}> {mobile} </Text>
           
// //             <TextInput placeholder='Input your name' placeholderTextColor='#FFFFFF'
// //             style={{height: 40, width:250, borderColor: '#00FF00',  
// //             borderWidth: 1,color:"#FFFFFF",padding:10 }}
// //             onChangeText={text => this.setState({value:text})}
// //             value={this.state.value}/> 
// //         </View>

// //         <View style={{flex :1, alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>

           
// //             <View style={{flex :1, borderWidth:'1px', borderColor:'#00FF00', alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>
               
// //             {/* <uses-permission android:name="android.permission.CAMERA" />
// //             <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />       */}
           


// //             </View>
// //             <Text style = {styles.smallTitleText}> </Text>
// //             <Text style = {styles.smallTitleText}>Add Photo</Text>
// //             <Text style = {styles.smallTitleText}></Text>
// //         </View>
// //     </View>
// //       <View style={{flex :1, backgroundColor: '#303636'}}>
// //       <Text style = {styles.smallTitleText}> </Text>
// //         <View style={{flex :1, alignSelf:'center', width: '300px'}}>
// //                 <Button
// //                 color="#FF0000"
// //                 title="Next"
// //                 accessibilityLabel="Next"
// //                 onPress={()=>this.props.navigation.navigate('Details',{mobile:JSON.stringify(mobile),nume:this.state.value})}
// //                 /> 
// //             </View>
// //         <View style={{flex :1}}/>
// //         <View style={{flex :1}}/>
// //     </View>
// //   </View>
// //   );
// // }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#303636',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   image: {
// //     flex: 3,
// //     alignItems: 'center',
// //     marginLeft : '-175px'
// //   },
// //   bigTitleText: {
// //     fontSize: 40,
// //     fontWeight: "bold",
// //     color:"#FFFFFF"
// //   },
// //   smallTitleText: {
// //     fontSize: 15,
// //     color:"#FFFFFF"
// //   },
// //   midTitleText: {
// //     fontSize: 30,
// //     color:"#FFFFFF"
// //   }
// // });