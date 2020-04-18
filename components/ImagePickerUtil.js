import * as React from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import store from "../js/store/index";
import { addPhoto } from "../js/actions";

export default class ImagePickerUtil extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      
      <View style={{ flex: 1, width:250, alignItems: 'center', justifyContent: 'center' }}>
        {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
        <Button style={styles.btnPhoto} title="Add Photo" onPress={this._pickImage} />
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
        store.dispatch(addPhoto(result.uri));
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}
const styles = StyleSheet.create({
btnPhoto: {
    width:250,
    backgroundColor: "rgba(0,0,0,1)"
  }
});