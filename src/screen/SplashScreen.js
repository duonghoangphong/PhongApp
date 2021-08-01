import React, { Component } from 'react';
import {
  StyleSheet, View, ImageBackground, Image, Text, ActivityIndicator
} from 'react-native';
import Utils from '../app/Utils';
import { Images } from '../assets';
import { Height, nstyles, Width } from '../styles/styles';
export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }

  closeActivityIndicator = () =>
    setTimeout(
      () =>
        this.setState({
          animating: false,
        }),
      3000,
    );
  componentDidMount = () => this.closeActivityIndicator();
  componentDidUpdate = () => {
    Utils.replace(this, 'sw_HomePage')
  };
  render() {
    const animating = this.state.animating;
    return (
      <ImageBackground source={Images.icBackgroud} style={styles.imgBG}>
        <View style={styles.viewLogo}>
          <Image style={nstyles.nIcon120} source={Images.icLogo}></Image>
          <Text style={styles.txtLogo}>Ứng dụng đa nền tảng</Text>
        </View>
        <ActivityIndicator
          animating={animating}
          color="white"
          size="large"
        />
        <Text style={styles.txtDesign}>@Design by Duong Hoang Phong</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imgBG: {
    flex: 1, alignItems: 'center'
  },
  txtLogo: {
    fontSize: 30, color: 'red'
  },
  viewLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Height(40),
  },
  txtDesign: {
    color: 'red',
    fontSize: 15,
    position: 'absolute',
    bottom: 15,
    left: 15
  }
});
