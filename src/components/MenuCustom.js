import React, { Component } from 'react'
import { Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { colors } from '../styles';
import { Height } from '../styles/styles';

export default class MenuCustom extends Component {
    render() {
        const { ...props } = this.props
        // console.log(...props)
        console.log(this.props)
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../assets/logo.png')} style={{ width: 200, height: 200 }}></Image>
                    </View>
                    <DrawerContentScrollView {...props} style={{ borderTopWidth: 2, borderBottomWidth: 2, backgroundColor: colors.veryLightPinkTwo, height: Height(60) }}>
                        <DrawerItemList {...props}></DrawerItemList>
                    </DrawerContentScrollView>
                    <View>
                        <Text style={{ textAlign: 'center', color: 'gray' }}>fb.com/phong.duong.3570</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}