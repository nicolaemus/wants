import React, { Component , useState} from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import {addNotification} from "../js/actions";

import store from "../js/store/index";

function handleNavigation(notification,{navigation}){
  navigation.navigate('Thanks');
}
function handleClick(){
  store.dispatch(addNotification(true));
}

function OnBoardingNotifications({route,navigation}) {
  const [value,setNotifications] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.rect1}></View>
        <View style={styles.rect2}>
          <Text style={styles.turnOn}>Turn ON</Text>
          <Text style={styles.verification}>Notifications.</Text>
          <Text style={styles.ots}>
            We&#39;ll make sure you don&#39;t miss out{"\n"}any WANTS in your
            expertise.
          </Text>
        </View>
        <View style={styles.rect3}></View>
        <View style={styles.rect4}>
          <Button
            style={styles.turnOnNotifications}
            title="Turn On"
            accessibilityLabel="Turn On"
            onPress={()=> handleClick()}

        ></Button>
        </View>
      </View>
      <View style={styles.btnArea}>
        <View style={styles.brnArea1}>
        <Button style={styles.nextScreen}
                    color="#FF0000"
                    title="Next"
                    accessibilityLabel="Next"
                    onPress={() => handleNavigation({value},{navigation})}
          
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
    flex: 0.25
  },
  rect4: {
    flex: 0.25,
    width:250,
    justifyContent: "center",
    alignSelf:"center"
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

export default OnBoardingNotifications;
