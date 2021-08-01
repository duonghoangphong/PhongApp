import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import Utils from '../../app/Utils';
import { Images } from '../../assets';
import HeaderComV1 from '../../components/HeaderComV1'
import { colors } from '../../styles';
import { nstyles, Width } from '../../styles/styles';
export default class NotificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listThongBao: [
                { id: 1, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 2, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 3, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 4, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 5, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 6, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 7, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 8, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 9, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 10, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 11, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 12, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 13, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 14, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 15, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 16, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 17, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 18, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
                { id: 19, title: 'Thông báo đến tất cả nhân viên', thoigian: '20/10/1999 19:00:00' },
            ]
        };
    }
    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.btnItem}>
                <Image source={Images.icNotificaton} style={[nstyles.nIcon30, styles.imgItem]}></Image>
                <View style={styles.viewItem}>
                    <Text style={styles.txtTitle}>{item.title}</Text>
                    <Text style={styles.txtTime}>{item.thoigian}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        const { listThongBao } = this.state
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView>
                    <HeaderComV1 title={'Thông báo'} onPress={() => Utils.goback(this)}></HeaderComV1>
                </SafeAreaView>
                <FlatList
                    // columnWrapperStyle={{ justifyContent: 'space-around' }}
                    data={listThongBao}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    btnItem: {
        flexDirection: 'row', backgroundColor: 'white',
        marginVertical: 2, paddingVertical: 10
    },
    imgItem: {
        marginLeft: 15, marginRight: 10
    },
    viewItem: {
        justifyContent: 'center'
    },
    txtTitle: {
        marginBottom: 5, fontSize: 16
    },
    txtTime: {
        fontSize: 12, color: colors.colorBlue
    }
})
