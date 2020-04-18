import React, { Component } from "react";
import { StyleSheet, View, Text, Button} from "react-native";
import store from '../js/store/index'

function OnBoardingThanks({route,navigation}) {
  const data = store.getState();
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.rect1}></View>
        <View style={styles.rect2}>
          <Text style={styles.thankYou}>THANK YOU!</Text>
        </View>
        <View style={styles.rect3}>
          <Text style={styles.loremIpsum}>
            Your account is ready ! Let's now start find WANTS.
          </Text>
        </View>
        <View style={styles.rect4}></View>
      </View>
      <View style={styles.btnArea}>
        <View style={styles.brnArea1}>
        <Button style={styles.nextScreen}
                color="#FF0000"
                title="Start Now"
                accessibilityLabel="Start Now"
                onPress={()=>navigation.navigate('MainMenu')}
          
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
  thankYou: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontSize: 40,
    textAlign: "center"
  },
  rect3: {
    flex: 0.25,
    justifyContent: "center"
  },
  loremIpsum: {
    width: 250,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    textAlign: "center",
    alignSelf: "center"
  },
  rect4: {
    flex: 0.25
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

export default OnBoardingThanks;
