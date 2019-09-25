/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,View} from 'react-native';
import Home from './src/layouts/_layout';
import Video from 'react-native-video';

export default class App extends Component {
  render() {
    return (
      <Home>
        
        <View style={{flex:1,height:100}} >
        <Video 
          source={{uri: 'http://estebanmast.com:8000/video'}}
          style={{
              position:'absolute',
              left:0,
              right:0,
              bottom:0,
              top:0}}
              resizeMode='contain'
          />
          </View>
      </Home>
    );
  }
}
