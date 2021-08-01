import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Utils from '../../app/Utils';
import HeaderComV1 from '../../components/HeaderComV1';
import { colors } from '../../styles';
import { Height } from '../../styles/styles';

export default class SettingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    logout = () => {
        Utils.replace(this, 'sc_Login')
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView>
                    <HeaderComV1 title={'Cài đặt'} onPress={() => Utils.goscreen(this, 'tab_Home')}></HeaderComV1>
                </SafeAreaView>
                <TouchableOpacity style={styles.btnDangXuat} onPress={() => this.logout()}>
                    <Text style={styles.txtDangXuat}>Đăng xuất tài khoản</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    btnDangXuat: {
        backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: Height(5), marginVertical: 10
    },
    txtDangXuat: {
        fontSize: 16, color: colors.orange, fontWeight: '600'
    }
})
