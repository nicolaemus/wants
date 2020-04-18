import React, { Component, useState} from "react";
import { StyleSheet, View, Text, Button, TouchableHighlightBase} from "react-native";
import PhoneInput from 'react-native-phone-input'
import ModalPickerImage from 'react-native-phone-input'
import ReactInputPhone from 'react-phone-input-2'

import MuiPhoneNumber from 'material-ui-phone-number';


import store from "../js/store/index";
import { addPhone } from "../js/actions/index";


class OnBoardingBegin extends Component{

  constructor(props){
    super(props);
    this.state = {
      mobile:""
    }
  }

  handleNextClick(){
      store.dispatch(addPhone(this.state.mobile));
      this.props.navigation.navigate('Confirm');
  }


  render(){
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.rect1}></View>
        <View style={styles.rect2}>
          <Text style={styles.mobileNumber}>Mobile Number</Text>
          <Text style={styles.verification}>Verification</Text>
          <Text style={styles.ots}>
            We will send you an One Time Password on this mobile number
          </Text>
        </View>
        <View style={styles.rect3}>
        {/* <PhoneInput defaultCountry="RO" placeholder="Enter phone number" value={this.state.mobile} onChange={(value)=>this.setState({mobile:value})}/>
         */}
         <MuiPhoneNumber
            defaultCountry={'ro'}
            inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
            value = {this.state.mobile} 
            onChange={(value)=>this.setState({mobile:value})}
         >

         </MuiPhoneNumber>
        </View>
        <View style={styles.rect4}>
          <Text style={styles.bySigningUp}>
            By signing up, you agree with WANTS,{"\n"}Terms of Services and
            Privacy Policy
          </Text>
        </View>
      </View>
      <View style={styles.btnArea}>
        <View style={styles.brnArea1}>
              <Button
                 style={styles.nextScreen}
                 title="Next"
                 color="#FF0000"
                 onPress={this.handleNextClick.bind(this)}
                /> 
        </View>
        <View style={styles.btnArea2}></View>
        <View style={styles.btnArea3}></View>
      </View>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  phones:{
    color:"#FFFFFF"
  }, 
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
    flex: 0.44
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
    alignSelf:"center"
  },
  countryPhone: {
    alignSelf: "center"
  },
  rect4: {
    flex: 0.25,
  },
  bySigningUp: {
    height: 28,
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    justifyContent: "flex-end",
    alignSelf:"center"
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

export default OnBoardingBegin;

// import React, {useState} from 'react';
// import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'

// export default function OnBoardingBegin({navigation}) {
//   const [value, setValue] = useState();
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
//             <Text style = {styles.bigTitleText}>Mobile Number</Text>
//             <Text style = {styles.bigTitleText}>Verification</Text>
//             <Text style = {styles.smallTitleText}> </Text>
//             <Text style = {styles.smallTitleText}>We will send you an One Time Password</Text>
//             <Text style = {styles.smallTitleText}>on this mobile number</Text>
//         </View>

//         <View style={{flex :1, alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>

           
//             <View style={{flex :0.4, paddingLeft:'5', borderWidth:'1px', borderColor:'#00FF00', alignSelf:'center', justifyContent: 'center', alignItems:'center'}}>
//                 <PhoneInput defaultCountry="RO" placeholder="Enter phone number" value={value} onChange={setValue}/>
//             </View>
//             <Text style = {styles.smallTitleText}> </Text>
//             <Text style = {styles.smallTitleText}>By signing-up you agree with WANTS</Text>
//             <Text style = {styles.smallTitleText}>Terms of Services and Privacy Policy</Text>
//             <Text style = {styles.smallTitleText}> </Text>
//         </View>
//     </View>
//       <View style={{flex :1, backgroundColor: '#303636'}}>
        
//         <View style={{flex :1, alignSelf:'center', width: '300px'}}>
//                 <Button
//                 color="#FF0000"
//                 title="Next"
//                 accessibilityLabel="Next"
//                 onPress={()=>navigation.navigate('Confirm', {mobile:{value}})}
//                 /> 
//             </View>
//         <View style={{flex :1}}/>
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
//   }
// });