import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, Image, Modal, FlatList, TouchableOpacity } from 'react-native'
import { colors } from '../styles/color'
import { reText, sizes } from '../styles/size'
import { nstyles, Width, Height } from '../styles/styles'

import _ from 'lodash';
import Utils from '../app/Utils'
import DropDownPicker from 'react-native-dropdown-picker'
import Icon from 'react-native-vector-icons/Feather'
import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Calendar } from 'react-native-calendars'
const mang = [
    { label: 'Ngày', value: '1' },
    { label: 'Tuần', value: '2' },
    { label: 'Tháng', value: '3' },
]
const mangFlatFlist = [{ label: 'mot' }, { label: 'hai' }, { label: 'ba' }, { label: 'ba' }, { label: 'ba' }, { label: 'ba' }, { label: 'ba' }]
const mangChamCong = [
    { Ten: 'phong', SoCong: 3, LuongThuc: 400000, LuongHaoHut: 500000 },
    { Ten: 'phong', SoCong: 3, LuongThuc: 400000, LuongHaoHut: 500000 },
    { Ten: 'phong', SoCong: 3, LuongThuc: 400000, LuongHaoHut: 500000 },
    { Ten: 'phong', SoCong: 3, LuongThuc: 400000, LuongHaoHut: 500000 },
    { Ten: 'phong', SoCong: 3, LuongThuc: 400000, LuongHaoHut: 500000 },
    { Ten: 'phong', SoCong: 3, LuongThuc: 400000, LuongHaoHut: 500000 },
]

export default class TinhTienLuongScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timkiem: 'uk',
            isActive: false,
            isSelect: 'Ngày',
            modal: true,
        }
    }
    componentDidMount() {
        this.setState({ modal: true })
    }
    keyExtractor = (item, index) => index.toString();
    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ backgroundColor: 'red', width: 80, position: 'absolute' }}>
                <TouchableOpacity>
                    {/* <Image source={require('../assets/icon_left-arrow.png')} style={{ width: 10, height: 10 }}></Image> */}
                </TouchableOpacity>
                <Text>{item.label}</Text>
            </TouchableOpacity>
        );
    };
    render() {
        const { timkiem, isActive, isSelect, modal } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal}>
                    <View style={{ backgroundColor: '#00000090', height: '100%', width: '100%' }}>
                        <View style={{ width: Width(80), height: Height(50), backgroundColor: 'white', top: Height(30), left: Width(10), borderRadius: 20 }}>
                            <TouchableOpacity onPress={() => this.setState({ modal: !modal })}>
                                <Text>sfdsfdsfdsfsf</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal> */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={require('../assets/icon_left-arrow.png')} style={[nstyles.nIcon40, { marginHorizontal: 10, tintColor: 'white' }]}></Image>
                    </TouchableOpacity>
                    <Text style={styles.headertitle}>Tính lương bản thân</Text>
                    <TouchableOpacity>
                        <Image
                            // source={require('../assets/icon_filtercolor.png')} 
                            style={[nstyles.nIcon35, { marginHorizontal: 10 }]}></Image>
                    </TouchableOpacity>
                </View>

                <View style={{ zIndex: 1, elevation: 1 }}>
                    <TouchableOpacity onPress={() => this.setState({ isActive: !isActive })} style={{ height: Height(3), backgroundColor: 'green' }}>
                        <Text>Nhan vao day</Text>
                    </TouchableOpacity>
                    {isActive ?
                        <View style={{ zIndex: 100 }}>
                            <FlatList
                                style={{ backgroundColor: 'yellow', marginTop: Height(3), elevation: 1 }}
                                data={mangFlatFlist}
                                renderItem={this.renderItem}
                                keyExtractor={this.keyExtractor}
                            ></FlatList>
                        </View>
                        : null
                    }
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, height: Height(5) }}>
                    <Text style={{ width: Width(65), fontSize: reText(18) }}>Tính lương theo :</Text>
                    <DropDownPicker
                        items={mang}
                        defaultValue={'1'}
                        style={{ width: Width(30), justifyContent: 'center' }}
                        containerStyle={{ height: 40, justifyContent: 'center' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ justifyContent: 'center' }}
                        onChangeItem={(value) => this.setState({ isSelect: value.label })}>
                    </DropDownPicker>
                </View>
                <View>
                    {isSelect == 'Ngày' ?
                        <Ngay></Ngay>
                        : isSelect == 'Tuần' ?
                            <Tuan></Tuan>
                            : <Thang></Thang>}
                </View>

            </SafeAreaView>
        )
    }
}

const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
const workout = { key: 'workout', color: 'green' };

class Ngay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chonNgay: this._convert(new Date(new Date().getTime()))
        }
    }
    _setDate = (event, date) => {
        let ngay = this._convert(date)
        this.setState({ chonNgay: ngay })
    }
    _convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
    _setDateA = (value) => {
        this.setState({ chonNgay: value.dateString })
    }
    _chuyenSoThanhTien = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    keyExtractor = (item, index) => index.toString();
    renderItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', height: Width(7), borderTopWidth: 1 }}>
                <Text style={{ width: Width(15), textAlign: 'center' }}>{item.Ten}</Text>
                <Text style={{ width: Width(25), textAlign: 'center' }}>{item.SoCong}</Text>
                <Text style={{ width: Width(25), textAlign: 'center' }}>{this._chuyenSoThanhTien(item.LuongThuc)}</Text>
                <Text style={{ width: Width(30), textAlign: 'center' }}>{this._chuyenSoThanhTien(item.LuongHaoHut)}</Text>
            </View>
        );
    };
    render() {
        const { chonNgay } = this.state;
        return (
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginTop: 5 }}>
                    <Text style={{ fontSize: reText(16) }}>Chọn ngày</Text>
                    <Text style={{ fontSize: reText(16), width: Width(46) }}> : <Text style={{ color: 'red' }}> {chonNgay}</Text></Text>
                    {/* <DateTimePicker
                        value={new Date(chonNgay)}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        style={{ width: 120 }}
                        onChange={this._setDate}
                        locale={'vi-VN'}>
                    </DateTimePicker> */}
                </View>
                <Calendar
                    firstDay={1} //bat dau tu thu hai
                    markingType={'simple'}
                    //thay doi dong tren thi se khac
                    markedDates={{
                        '2021-03-09': { marked: true, dotColor: '#50cebb' },
                        '2021-03-10': { marked: true, dotColor: '#50cebb' },
                        '2021-03-11': { startingDay: true, color: '#50cebb', textColor: 'white' },
                        '2021-03-12': { color: '#70d7c7', textColor: 'white' },
                        '2021-03-13': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'yellow3' },
                        '2021-03-14': { color: '#70d7c7', textColor: 'white' },
                        '2021-03-15': { endingDay: true, color: '#50cebb', textColor: 'white' },
                        '2021-03-16': { selected: true, marked: true, selectedColor: 'blue' },
                        '2021-03-17': { marked: true },
                        '2021-03-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                        '2021-03-19': { disabled: true, disableTouchEvent: true },
                        '2021-03-20': { dots: [vacation, massage, workout], selected: true, selectedColor: 'red' },
                        '2021-03-21': { dots: [massage, workout], disabled: true },
                        '2021-03-22': {
                            periods: [
                                { startingDay: false, endingDay: true, color: '#5f9ea0' },
                                { startingDay: false, endingDay: true, color: '#ffa500' },
                                { startingDay: true, endingDay: false, color: '#f0e68c' }]
                        },
                        '2021-03-23': {
                            periods: [
                                { startingDay: true, endingDay: false, color: '#ffa500' },
                                { color: 'transparent' },
                                { startingDay: false, endingDay: false, color: '#f0e68c' }]
                        },
                        '2021-03-24': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'green'
                                },
                                text: {
                                    color: 'black',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        '2021-03-25': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'white',
                                    elevation: 2
                                },
                                text: {
                                    color: 'blue'
                                }
                            }
                        }
                    }}

                    current={chonNgay}
                    onDayPress={(day) => this._setDateA(day)}
                    onDayLongPress={(day) => { console.log('selected long day', day) }}
                    onMonthChange={(month) => this._setDateA(month)}
                    enableSwipeMonths={true}
                />
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.mediumGreen, height: Width(7), alignItems: 'center' }}>
                        <Text style={{ width: Width(15), textAlign: 'center' }}> Tên</Text>
                        <Text style={{ width: Width(25), textAlign: 'center' }}>Số công </Text>
                        <Text style={{ width: Width(25), textAlign: 'center' }}>Lương thực</Text>
                        <Text style={{ width: Width(30), textAlign: 'center' }}>Lương hao hụt </Text>
                    </View>
                    <FlatList
                        data={mangChamCong}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}>
                    </FlatList>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10, borderWidth: 1, borderRadius: 10 }}>
                    <View style={{ marginHorizontal: 5 }}>
                        <View style={{ flexDirection: 'row', height: Width(7), alignItems: 'center' }}>
                            <Text style={{ width: Width(30) }}>Tiền lương: </Text>
                            <Text>:  {this._chuyenSoThanhTien(500021232)} VND</Text>
                        </View>
                        <View style={{ flexDirection: 'row', height: Width(7), alignItems: 'center' }}>
                            <Text style={{ width: Width(30) }}>Tiền chức vụ:</Text>
                            <Text>:  {this._chuyenSoThanhTien(5000000)} VND</Text>
                        </View>
                        <View style={{ flexDirection: 'row', height: Width(7), alignItems: 'center' }}>
                            <Text style={{ width: Width(30) }}>Tổng lương (Ngày)</Text>
                            <Text>:  {this._chuyenSoThanhTien(5000000)} VND</Text>
                        </View>
                        <View style={{ flexDirection: 'row', height: Width(7), alignItems: 'center' }}>
                            <Text style={{ width: Width(30) }}>Tổng lương nhận</Text>
                            <Text>:  {this._chuyenSoThanhTien(5000000)} VND (10 công)</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

class Tuan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chonNgay: this._convert(new Date(new Date().getTime())),
            batdau: '2021-03-07',
            ketthuc: '2021-03-13'
        }
    }
    _setDate = (event, date) => {
        let ngay = this._convert(date)
        this.setState({ chonNgay: ngay })
    }
    _convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
    _setDateA = (value) => {
        this.setState({ chonNgay: value.dateString })
    }
    _chuyenSoThanhTien = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    keyExtractor = (item, index) => index.toString();
    renderItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', height: Width(7), borderTopWidth: 1 }}>
                <Text style={{ width: Width(15), textAlign: 'center' }}>{item.Ten}</Text>
                <Text style={{ width: Width(25), textAlign: 'center' }}>{item.SoCong}</Text>
                <Text style={{ width: Width(25), textAlign: 'center' }}>{this._chuyenSoThanhTien(item.LuongThuc)}</Text>
                <Text style={{ width: Width(30), textAlign: 'center' }}>{this._chuyenSoThanhTien(item.LuongHaoHut)}</Text>
            </View>
        );
    };
    render() {
        const { chonNgay, batdau, ketthuc } = this.state;
        return (
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginTop: 5 }}>
                    <Text style={{ fontSize: reText(16) }}>Chọn tuần:</Text>
                    <Text style={{ fontSize: reText(16), width: Width(70) }}>  từ  <Text style={{ color: 'red' }}>{batdau}</Text>  đến  <Text style={{ color: 'red' }}>{ketthuc}</Text></Text>
                </View>
                <Calendar
                    markingType={'simple'}
                    //thay doi dong tren thi se khac
                    markedDates={{
                        '2021-03-09': { marked: true, dotColor: '#50cebb' },
                        '2021-03-10': { marked: true, dotColor: '#50cebb' },
                        '2021-03-11': { startingDay: true, color: '#50cebb', textColor: 'white' },
                        '2021-03-12': { color: '#70d7c7', textColor: 'white' },
                        '2021-03-13': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'yellow3' },
                        '2021-03-14': { color: '#70d7c7', textColor: 'white' },
                        '2021-03-15': { endingDay: true, color: '#50cebb', textColor: 'white' },
                        '2021-03-16': { selected: true, marked: true, selectedColor: 'blue' },
                        '2021-03-17': { marked: true },
                        '2021-03-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                        '2021-03-19': { disabled: true, disableTouchEvent: true },
                        '2021-03-20': { dots: [vacation, massage, workout], selected: true, selectedColor: 'red' },
                        '2021-03-21': { dots: [massage, workout], disabled: true },
                        '2021-03-22': {
                            periods: [
                                { startingDay: false, endingDay: true, color: '#5f9ea0' },
                                { startingDay: false, endingDay: true, color: '#ffa500' },
                                { startingDay: true, endingDay: false, color: '#f0e68c' }]
                        },
                        '2021-03-23': {
                            periods: [
                                { startingDay: true, endingDay: false, color: '#ffa500' },
                                { color: 'transparent' },
                                { startingDay: false, endingDay: false, color: '#f0e68c' }]
                        },
                        '2021-03-24': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'green'
                                },
                                text: {
                                    color: 'black',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        '2021-03-25': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'white',
                                    elevation: 2
                                },
                                text: {
                                    color: 'blue'
                                }
                            }
                        }
                    }}

                    current={chonNgay}
                    onDayPress={(day) => this._setDateA(day)}
                    onDayLongPress={(day) => { console.log('selected long day', day) }}
                    onMonthChange={(month) => this._setDateA(month)}
                    enableSwipeMonths={true}
                />
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.mediumGreen, height: Width(7), alignItems: 'center' }}>
                        <Text style={{ width: Width(15), textAlign: 'center' }}> Tên</Text>
                        <Text style={{ width: Width(25), textAlign: 'center' }}>Số công </Text>
                        <Text style={{ width: Width(25), textAlign: 'center' }}>Lương thực</Text>
                        <Text style={{ width: Width(30), textAlign: 'center' }}>Lương hao hụt </Text>
                    </View>
                    <FlatList
                        data={mangChamCong}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}>
                    </FlatList>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10, borderWidth: 1, borderRadius: 10 }}>
                    <View style={{ marginHorizontal: 5 }}>
                        <View style={{ flexDirection: 'row', height: Width(7), alignItems: 'center' }}>
                            <Text style={{ width: Width(30) }}>Tiền lương: </Text>
                            <Text>:  {this._chuyenSoThanhTien(500021232)} VND</Text>
                        </View>
                        <View style={{ flexDirection: 'row', height: Width(7), alignItems: 'center' }}>
                            <Text style={{ width: Width(30) }}>Tiền chức vụ:</Text>
                            <Text>:  {this._chuyenSoThanhTien(5000000)} VND</Text>
                        </View>
                        <View style={{ flexDirection: 'row', height: Width(7), alignItems: 'center' }}>
                            <Text style={{ width: Width(30) }}>Tổng lương (Tuần)</Text>
                            <Text>:  {this._chuyenSoThanhTien(5000000)} VND</Text>
                        </View>
                        <View style={{ flexDirection: 'row', height: Width(7), alignItems: 'center' }}>
                            <Text style={{ width: Width(30) }}>Tổng lương nhận</Text>
                            <Text>:  {this._chuyenSoThanhTien(5000000)} VND (100 công)</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

class Thang extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chonNgay: this._convert(new Date(new Date().getTime())),
            batdau: '2021-03-07',
            ketthuc: '2021-03-13',
            chonThang: 3
        }
    }
    _setDate = (event, date) => {
        let ngay = this._convert(date)
        this.setState({ chonNgay: ngay })
    }
    _convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
    _setDateA = (value) => {
        this.setState({ chonNgay: value.dateString })
    }
    _chuyenSoThanhTien = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    keyExtractor = (item, index) => index.toString();
    renderItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', height: Width(7), borderTopWidth: 1 }}>
                <Text style={{ width: Width(15), textAlign: 'center' }}>{item.Ten}</Text>
                <Text style={{ width: Width(25), textAlign: 'center' }}>{item.SoCong}</Text>
                <Text style={{ width: Width(25), textAlign: 'center' }}>{this._chuyenSoThanhTien(item.LuongThuc)}</Text>
                <Text style={{ width: Width(30), textAlign: 'center' }}>{this._chuyenSoThanhTien(item.LuongHaoHut)}</Text>
            </View>
        );
    };
    render() {
        const { chonNgay, batdau, ketthuc, chonThang } = this.state;
        return (
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginTop: 5 }}>
                    <Text style={{ fontSize: reText(16) }}>Chọn tháng: </Text>
                    <Text style={{ fontSize: reText(16), width: Width(70) }}><Text style={{ color: 'red' }}>tháng {chonThang}</Text></Text>
                </View>
                <Calendar
                    markingType={'simple'}
                    //thay doi dong tren thi se khac
                    markedDates={{
                        '2021-03-09': { marked: true, dotColor: '#50cebb' },
                        '2021-03-10': { marked: true, dotColor: '#50cebb' },
                        '2021-03-11': { startingDay: true, color: '#50cebb', textColor: 'white' },
                        '2021-03-12': { color: '#70d7c7', textColor: 'white' },
                        '2021-03-13': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'yellow3' },
                        '2021-03-14': { color: '#70d7c7', textColor: 'white' },
                        '2021-03-15': { endingDay: true, color: '#50cebb', textColor: 'white' },
                        '2021-03-16': { selected: true, marked: true, selectedColor: 'blue' },
                        '2021-03-17': { marked: true },
                        '2021-03-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                        '2021-03-19': { disabled: true, disableTouchEvent: true },
                        '2021-03-20': { dots: [vacation, massage, workout], selected: true, selectedColor: 'red' },
                        '2021-03-21': { dots: [massage, workout], disabled: true },
                        '2021-03-22': {
                            periods: [
                                { startingDay: false, endingDay: true, color: '#5f9ea0' },
                                { startingDay: false, endingDay: true, color: '#ffa500' },
                                { startingDay: true, endingDay: false, color: '#f0e68c' }]
                        },
                        '2021-03-23': {
                            periods: [
                                { startingDay: true, endingDay: false, color: '#ffa500' },
                                { color: 'transparent' },
                                { startingDay: false, endingDay: false, color: '#f0e68c' }]
                        },
                        '2021-03-24': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'green'
                                },
                                text: {
                                    color: 'black',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        '2021-03-25': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'white',
                                    elevation: 2
                                },
                                text: {
                                    color: 'blue'
                                }
                            }
                        }
                    }}

                    current={chonNgay}
                    onDayPress={(day) => this._setDateA(day)}
                    onDayLongPress={(day) => { console.log('selected long day', day) }}
                    onMonthChange={(month) => this._setDateA(month)}
                    enableSwipeMonths={true}
                />
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.mediumGreen, height: Width(7), alignItems: 'center' }}>
                        <Text style={{ width: Width(15), textAlign: 'center' }}> Tên</Text>
                        <Text style={{ width: Width(25), textAlign: 'center' }}>Số công </Text>
                        <Text style={{ width: Width(25), textAlign: 'center' }}>Lương thực</Text>
                        <Text style={{ width: Width(30), textAlign: 'center' }}>Lương hao hụt </Text>
                    </View>
                    <FlatList
                        data={mangChamCong}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}>
                    </FlatList>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 10, borderWidth: 1, borderRadius: 10 }}>
                    <View style={{ marginHorizontal: 5 }}>
                        <View style={{ flexDirection: 'row', height: Width(7), alignItems: 'center' }}>
                            <Text style={{ width: Width(30) }}>Tiền lương: </Text>
                            <Text>:  {this._chuyenSoThanhTien(500021232)} VND</Text>
                        </View>
                        <View style={{ flexDirection: 'row', height: Width(7), alignItems: 'center' }}>
                            <Text style={{ width: Width(30) }}>Tiền chức vụ:</Text>
                            <Text>:  {this._chuyenSoThanhTien(5000000)} VND</Text>
                        </View>
                        <View style={{ flexDirection: 'row', height: Width(7), alignItems: 'center' }}>
                            <Text style={{ width: Width(30) }}>Tổng lương (Tháng)</Text>
                            <Text>:  {this._chuyenSoThanhTien(5000000)} VND</Text>
                        </View>
                        <View style={{ flexDirection: 'row', height: Width(7), alignItems: 'center' }}>
                            <Text style={{ width: Width(30) }}>Tổng lương nhận</Text>
                            <Text>:  {this._chuyenSoThanhTien(5000000)} VND (100 công)</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
