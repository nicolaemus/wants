import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import store from "../js/store/index";
import {addContacts} from "../js/actions";

function handleNavigation(contacts,{navigation}){
  navigation.navigate('Notifications');
}

function handleClick(){
  store.dispatch(addContacts(true));
}

function OnBoardingContacts({route,navigation}) {
  const [value,setValue] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.rect1}></View>
        <View style={styles.rect2}>
          <Text style={styles.wants}>WANTS</Text>
          <Text style={styles.verification}>
            Would like to access {"\n"} your Contacts.
          </Text>
        </View>
        <View style={styles.rect3}>
          <Text style={styles.loremIpsum}>
            This helps you find friends and help
          </Text>
        </View>
        <View style={styles.rect4}>
          <Button
            style={styles.turnOnNotifications}
            title="Allow"
            accessibilityLabel="Allow"  
            onPress={()=>handleClick()}
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
    flex: 0.34
  },
  wants: {
    color: "rgba(208,2,27,1)",
    alignSelf: "center",
    fontSize: 40,
    textAlign: "center"
  },
  verification: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontSize: 24,
    textAlign: "center"
  },
  rect3: {
    flex: 0.15
  },
  loremIpsum: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    textAlign: "center"
  },
   rect4: {
    flex: 0.25,
    width:250,
    justifyContent: "center",
    alignSelf:"center"
  },
  turnOnNotifications: {
    width: 250,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignSelf: "center"
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

export default OnBoardingContacts;
