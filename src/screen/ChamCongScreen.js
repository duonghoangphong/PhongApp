import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { colors } from '../styles/color'
import { reText, sizes } from '../styles/size'
import { nstyles, Width, Height } from '../styles/styles'
import CheckBox from '@react-native-community/checkbox'
import DateTimePicker from '@react-native-community/datetimepicker'

const mangTEMP = [
    { id: '1', ten: 'phong' },
    { id: '2', ten: 'hai' },
    { id: '3', ten: 'huyen' },
    { id: '4', ten: 'nguyen' },
    { id: '5', ten: 'thinh' },
    { id: '6', ten: 'phuong' },
    { id: '7', ten: 'kha' },
    { id: '8', ten: 'hai' },
]

export default class ChamCongScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mang: mangTEMP,
            mangChamCong: [],
            tatca: false,
            chonNgay: '1999-10-20'
        }
    }
    _ktTonTai = async (mang, phantu) => {
        let temp = -1;
        await mang.map((item, index) => {
            if (mang[index].id == phantu) {
                temp = index
            }
        })
        return temp
    }
    _themVaoMangChamCong = async (value) => {
        const { mang, mangChamCong } = this.state
        // mangtam[value] = { ac: 'msdfdsfm', ...mangtam[value] }
        let temp = ''
        if (mangChamCong.length == 0)
            mangChamCong.push({ ...mang[value] })
        else {
            temp = await this._ktTonTai(mangChamCong, mang[value].id)
            if (temp == -1)
                mangChamCong.push({ ...mang[value] })
            else
                mangChamCong.splice(temp, 1);
        }
        console.log(mangChamCong)
    }
    _setDate = (event, date) => {
        let ngay = this._convert(date)
        const { mang, chonNgay } = this.state
        mang.map((item, index) => mang[index] = { ...mang[index], ngay: ngay })
        console.log(mang)
        this.setState({ chonNgay: ngay })
    }
    _convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
    _chamCong = () => {

    }
    keyExtractor = (item, index) => index.toString();
    renderItem = ({ item, index }) => {
        return (
            <View style={{ height: Height(6), justifyContent: 'center', alignItems: 'center', marginVertical: 1 }}>
                <View style={{
                    backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between',
                    width: Width(96), height: Height(6), alignItems: 'center', paddingHorizontal: 20, borderRadius: 10
                }}>
                    <Text>{item.ten}</Text>
                    <CheckBox
                        onValueChange={() => this._themVaoMangChamCong(index)}
                        boxType={'circle'}
                        onTintColor={'green'}
                        // onFillColor={'green'}
                        onCheckColor={'green'}
                        onAnimationType={'bounce'}
                        value={this.state.tatca}
                        style={{ height: 25, width: 25 }}>
                    </CheckBox></View>
            </View>
        );
    };
    render() {
        const { mang, mangChamCong, tatca, chonNgay } = this.state
        return (
            <SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={require('../assets/icon_left-arrow.png')} style={[nstyles.nIcon40, { marginHorizontal: 10, tintColor: 'white' }]}></Image>
                    </TouchableOpacity>
                    <Text style={styles.headertitle}>Chấm công nhân viên</Text>
                    <TouchableOpacity>
                        <Image
                            // source={require('../assets/icon_filtercolor.png')} 
                            style={[nstyles.nIcon35, { marginHorizontal: 10 }]}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center' }}>
                        <Text style={{ fontSize: reText(20) }}>Chọn ngày:</Text>
                        <DateTimePicker
                            textColor='red'
                            value={new Date(chonNgay)}
                            mode='date'
                            is24Hour={true}
                            // display="default"
                            style={{ width: 120, }}
                            onChange={this._setDate}
                            locale={'vi-VN'}>
                        </DateTimePicker>
                        <TouchableOpacity style={{ height: Height(5), justifyContent: 'center' }} onPress={() => this.setState({ tatca: !tatca })}>
                            <Text style={{ color: 'blue', textAlign: 'right', fontSize: reText(20) }}>{tatca ? 'Xoá tất cả' : 'Chọn tất cả'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: Width(100) }}>
                        <FlatList
                            extraData={this.state}
                            data={mang}
                            renderItem={this.renderItem}
                            keyExtractor={this.keyExtractor}>
                        </FlatList>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                        <TouchableOpacity style={{ backgroundColor: 'blue', height: Height(4), width: Width(30), borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>
                                Chấm công
                            </Text>
                        </TouchableOpacity>
                    </View>
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
