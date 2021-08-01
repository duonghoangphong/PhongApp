import React, { Component } from 'react';
import { View, Text, Image, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../styles/color'
import { nstyles } from '../../styles/styles'
import { Images } from '../../assets';
import Utils from '../../app/Utils';

class TabbarHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexActiveItem: this.props.state.index
        };
        this.screens = [
            {
                screen: "tab_MyInfor",
                id: 0,
                icon: Images.icBoy,
                title: 'Thông tin'
            },
            {
                screen: "tab_Notification",
                id: 1,
                icon: Images.icNotificaton,
                title: 'Thông báo'
            },
            {
                screen: "tab_Home",
                id: 2,
                icon: Images.icHome,
                title: 'Trang chủ'
            },
            {
                screen: "tab_Information",
                id: 3,
                icon: Images.icInfor,
                title: 'Thông tin'
            },
            {
                screen: "tab_Setting",
                id: 4,
                icon: Images.icSetting,
                title: 'Cài đặt'
            },
        ]
    }
    activeItem = (item) => {
        this.setState({ indexActiveItem: item.id })
        Utils.goscreen(this, item.screen)
    }
    renderItem = (item, index) => {
        return (
            <TouchableOpacity onPress={() => this.activeItem(item)} style={styles.btnTabbar}>
                <Image style={[this.state.indexActiveItem == item.id ? nstyles.nIcon30 : nstyles.nIcon20, styles.imgTabbar, { tintColor: this.props.state.index == item.id ? colors.colorButtomright : colors.colorTextBTGray }]} source={item.icon}></Image>
                {/* <Text style={{ color: this.state.indexActiveItem == item.id ? colors.colorButtomright : 'white' }}>{item.title}</Text> */}
                {
                    this.props.state.index == item.id ? <Text style={{ color: colors.colorButtomright }}>{item.title}</Text> : null
                }
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.viewHome}>
                {
                    this.screens.map(this.renderItem)
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    btnTabbar: {
        justifyContent: 'center', alignItems: 'center'
    },
    imgTabbar: {
        marginBottom: 2
    },
    viewHome: {
        alignItems: 'center', justifyContent: 'space-around', width: '100%', flexDirection: 'row', backgroundColor: colors.white,
        paddingBottom: Platform.OS == 'ios' ? 10 : 0, height: Platform.OS == 'ios' ? 70 : 65
    }
})
export default TabbarHome;
