import React, { Component } from 'react';
import {
  StyleSheet, View, ImageBackground, Image, Text, ActivityIndicator, TextInput, TouchableOpacity
} from 'react-native';
import Utils from '../app/Utils';
import { Images } from '../assets';
import { colors } from '../styles';
import { Height, nstyles, Width } from '../styles/styles';
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: true,
      showpass: true,
      taikhoan: '123',
      matkhau: '123'
    };
  }
  _showpass() {
    this.setState({ showpass: !this.state.showpass })
  }
  _login = () => {
    const { taikhoan, matkhau } = this.state
    if (taikhoan == '123' && matkhau == '123')
      Utils.replace(this, 'PhongApp')
  }
  render() {
    const { animating, showpass } = this.state
    return (
      <ImageBackground source={Images.icBackgroud} style={styles.imgBG}>
        <View style={styles.viewLogo}>
          <Image style={nstyles.nIcon120} source={Images.icLogo}></Image>
          <Text style={styles.txtLogo}>Ứng dụng đa nền tảng</Text>
        </View>
        <View style={styles.viewDangNhap}>
          <View style={styles.viewTaiKhoan}>
            <Image source={Images.icTaiKhoan} style={[nstyles.nIcon30, styles.imgTaiKhoan]}></Image>
            <TextInput style={styles.inputTK} onChangeText={(value => this.setState({ taikhoan: value }))}></TextInput>
          </View>
          <View style={styles.viewTaiKhoan}>
            <Image source={Images.icMatKhau} style={[nstyles.nIcon30, styles.imgTaiKhoan]}></Image>
            <TextInput style={styles.inputTK} secureTextEntry={showpass} onChangeText={(value => this.setState({ matkhau: value }))}></TextInput>
            <TouchableOpacity onPress={() => this._showpass()}>
              <Image source={showpass ? Images.icHidePass : Images.icShowPass} style={[nstyles.nIcon30, styles.imgTaiKhoan]}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBTN}>
            <TouchableOpacity style={styles.btnDangNhap} onPress={() => this._login()}>
              <Text style={styles.txtDangNhap}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnDangNhap}>
              <Text style={styles.txtDangNhap}>Thoát</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    bottom: 30,
    left: 30
  },
  viewDangNhap: {
    width: Width(90), height: Height(30), backgroundColor: '#FFFFFF90', borderRadius: 15
  },
  viewTaiKhoan: {
    width: '100%', height: '20%', alignItems: 'center', flexDirection: 'row', marginTop: Width(2)
  },
  imgTaiKhoan: {
    marginHorizontal: 10
  },
  inputTK: {
    width: '72%', borderBottomWidth: 1, height: nstyles.nIcon30.height, fontSize: 20
  },
  viewBTN: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: Width(12)
  },
  btnDangNhap: {
    width: Width(30), paddingVertical: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.placeholderBlue
  },
  txtDangNhap: {
    fontSize: 18, color: 'white'
  }
});
