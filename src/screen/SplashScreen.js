import React, {Component} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';

const background = require('../assets/background.jpg');
const logo = require('../assets/logo.png');
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
    this.props.navigation.replace('Login');
  };
  render() {
    const animating = this.state.animating;
    return (
      <View>
        <ImageBackground style={styles.imagebackground} source={background}>
          <View style={styles.logo}>
            <Image style={styles.hinhanh} source={logo}></Image>
            <Text style={{color: 'white', fontSize: 30}}>
              ỨNG DỤNG CHẤM CÔNG
            </Text>
            <Text style={{color: 'red', fontSize: 20}}>
              @Design by Duong Hoang Phong
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '60%',
            }}>
            <ActivityIndicator
              animating={animating}
              color="white"
              size="large"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  header: {},
  imagebackground: {
    height: height,
    width: width,
  },
  logo: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hinhanh: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  logochu: {
    color: 'white',
  },
});
