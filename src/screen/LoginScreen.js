import React, { Component, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { showMessage } from 'react-native-flash-message';

import { nGlobalKeys } from '../app/data/globalKey';
import apiLogin from '../apis/apiLogin';
import Utils from '../app/Utils';

import { TabView } from 'react-native-tab-view'

const background = require('../assets/background.jpg');
const logo = require('../assets/logo.png');

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showpassword: true,
      taiKhoan: 'admin',
      matKhau: '123',
    };
  }

  _exit = () => {
    Alert.alert(
      'Thông báo',
      'Bạn có muốn thoát ứng dụng ?',
      [
        {
          text: 'Yes',
          onPress: () => console.log('Yes Pressed'),
        },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false },
      //clicking out side of alert will not cancel
    );
  };
  dangNhap = async () => {
    let temp = await apiLogin(this.state.taiKhoan, this.state.matKhau);
    if (temp.data != null) {
      showMessage({
        message: 'Đăng nhập thành công',
        type: 'success',
      });
      Utils.nsetStore(nGlobalKeys.loginToken, temp.data.Token);
      this.props.navigation.navigate('Main');
    } else {
      this.refs['taiKhoan'].focus();
      showMessage({
        message: 'Tài khoản, mật khẩu không được trống',
        type: 'warning',
      });
    }
  };
  render() {
    const { showpassword, taiKhoan, matKhau } = this.state;
    return (
      <KeyboardAwareScrollView
      // keyboardShouldPersistTaps="always"
      // showsVerticalScrollIndicator={false}
      // style={{marginTop: 10, paddingHorizontal: 10}}
      >
        <ImageBackground source={background} style={styles.imagebackground}>
          <View style={styles.logo}>
            <Image style={styles.hinhanh} source={logo}></Image>
            <Text style={{ color: 'white', fontSize: 30 }}>
              ỨNG DỤNG CHẤM CÔNG
            </Text>
            <Text style={{ color: 'red', fontSize: 20 }}>
              {/* @Design by Duong Hoang Phong */}
            </Text>
          </View>
          <View style={styles.thongtin}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <Image
                source={require('../assets/icon_user.png')}
                style={styles.imageicon}></Image>
              <TextInput
                onChangeText={(value) => this.setState({ taiKhoan: value })}
                ref={'taiKhoan'}
                style={styles.textinput}
                placeholder="Username"
                value={taiKhoan}
                placeholderTextColor="black"></TextInput>
              <Text></Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <Image
                source={require('../assets/icon_password.png')}
                style={styles.imageicon}></Image>
              <TextInput
                secureTextEntry={showpassword}
                style={styles.textinput}
                placeholder="Password"
                value={matKhau}
                onChangeText={(value) => this.setState({ matKhau: value })}
                placeholderTextColor="black">
              </TextInput>
              <TouchableOpacity
                onPress={() => this.setState({ showpassword: !showpassword })}>
                <Image
                  source={
                    this.state.showpassword
                      ? require('../assets/icon_hidepassword.png')
                      : require('../assets/icon_showpassword.png')
                  }
                  style={styles.imageicon}></Image>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 40,
              }}>
              <TouchableOpacity
                style={styles.nut}
                onPress={() => this.dangNhap()}>
                <Text style={styles.chu}>ĐĂNG NHẬP</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nut} onPress={this._exit}>
                <Text style={styles.chu}>THOÁT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  imagebackground: {
    height: height,
    width: width,
    alignItems: 'center',
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
  thongtin: {
    height: '25%',
    // backgroundColor: '#FFFAF090',
    backgroundColor: '#FFFFFF90',
    width: '90%',
    borderRadius: 20,
  },
  textinput: {
    borderBottomWidth: 1,
    height: 40,
    width: '80%',
  },
  imageicon: {
    height: 30,
    width: 30,
    marginRight: 5
  },
  nut: {
    backgroundColor: 'blue',
    height: 40,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  chu: {
    fontWeight: 'bold',
    color: 'white',
  },
});
