import React, { Component } from 'react'
import { Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { colors } from '../styles';
import { Height } from '../styles/styles';
import { Images } from '../assets';
import { TouchableOpacity } from 'react-native';
import Utils from '../app/Utils';

export default class MenuCustom extends Component {
    render() {
        const { ...props } = this.props
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={Images.icLogo} style={{ width: 200, height: 200 }}></Image>
                    </View>
                    <DrawerContentScrollView {...props} style={{ borderTopWidth: 2, borderBottomWidth: 2, backgroundColor: colors.veryLightPinkTwo }}>
                        <DrawerItemList {...props} itemStyle={{ backgroundColor: 'red', height: 50 }} labelStyle={{ color: 'yellow' }}></DrawerItemList>
                        <TouchableOpacity onPress={() => Utils.goscreen(this, 'sw_HomePage')}>
                            <Text>Thoát</Text>
                        </TouchableOpacity>
                    </DrawerContentScrollView>
                    <View>
                        <Text style={{ textAlign: 'center', color: 'gray' }}>fb.com/phong.duong.3570</Text>
                        <TouchableOpacity onPress={() => Utils.toggleDrawer(this)}>
                            <Text>Đóng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Utils.goscreen(this, 'sw_HomePage')}>
                            <Text>Thoát</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}