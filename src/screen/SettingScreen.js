import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { colors } from '../styles/color'
import { reText, sizes } from '../styles/size'
import { nstyles, Width, Height } from '../styles/styles'

export default class SettingScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={require('../assets/icon_left-arrow.png')} style={[nstyles.nIcon40, { marginHorizontal: 10, tintColor: 'white' }]}></Image>
                    </TouchableOpacity>
                    <Text style={styles.headertitle}>Cài đặt</Text>
                    <TouchableOpacity>
                        <Image
                            // source={require('../assets/icon_filtercolor.png')} 
                            style={[nstyles.nIcon35, { marginHorizontal: 10 }]}></Image>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        height: Height(5),
        backgroundColor: colors.mediumGreen,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headertitle: {
        color: 'white',
        fontSize: reText(25),
        fontWeight: 'bold'
    },
    headerimage: {
    },
    item: {
        backgroundColor: 'white',
        marginVertical: 2,
        justifyContent: 'center'
    }
})