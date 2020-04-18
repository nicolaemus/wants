import React, {Component} from 'react';
import { View,Text } from 'react-native';

import store from "../js/store/index";

class MainMenu extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const data = store.getState();

        return (
            <View><Text>
                MainMenu: {JSON.stringify(data)}</Text>
            </View>
        );
    }
}

export default MainMenu;