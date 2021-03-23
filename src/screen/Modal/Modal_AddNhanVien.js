import React, { Component } from 'react'
import { ScrollView, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import { reText } from '../../styles/size'
import { Height, nstyles, Width } from '../../styles/styles'
import { colors } from '../../styles/color'
import DropDownPicker from 'react-native-dropdown-picker'
// import { TouchableOpacity } from 'react-native-gesture-handler'
const mang = {
    "MaNV": "string",
    "HoTen": "string",
    "Ten": "string",
    "NgaySinh": "string",
    "CMND": "string",
    "SDT": "string",
    "GioiTinh": "string",
    "Tuoi": 0,
    "IsTinhTrang": 0,
    "isDiHoc": 0
}

export default class Modal_AddNhanVien extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gioiTinh: [{ label: 'Nam', value: 1 }, { label: 'Nữ', value: 2 }],
            diHoc: [{ label: 'Còn đi học', value: 1 }, { label: 'Đã nghĩ học', value: 2 }],
            abc: false
        }
    }
    render() {
        const { gioiTinh, diHoc, abc } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: '30%', backgroundColor: '#00000080' }}>

                </View>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: Height(5), backgroundColor: colors.mediumGreen }}>
                        <TouchableOpacity style={{ marginHorizontal: 20 }} onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../assets/icon_left-arrow.png')} style={nstyles.nIcon40}></Image>
                        </TouchableOpacity>
                        <Text style={{ fontSize: reText(25) }}>Thêm nhân viên</Text>
                    </View>
                    <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
                            <Text>Họ và tên</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 20, height: 40, width: 250 }}></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
                            <Text>Tên</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 20, height: 40, width: 250 }}></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
                            <Text>Ngày sinh</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 20, height: 40, width: 250 }}></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
                            <Text>CMND</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 20, height: 40, width: 250 }}></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
                            <Text>Số điện thoại</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 20, height: 40, width: 250 }} keyboardType={'numeric'}></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 20 }}>
                            <Text>Giới tính</Text>
                            <View style={{ zIndex: 100 }}>
                                <DropDownPicker
                                    items={gioiTinh}
                                    defaultValue={1}
                                    style={{ width: Width(60) }}
                                    containerStyle={{ height: 40, justifyContent: 'center', borderWidth: 1 }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    dropDownStyle={{ justifyContent: 'center' }}
                                    onChangeItem={(value) => this.setState({ isSelect: value.label })}>
                                </DropDownPicker>
                            </View>

                            <View style={{ zIndex: 100 }}>
                                <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={() => this.setState({ abc: !abc })}>
                                    <Text>adsfdsfsdfdsfs</Text>
                                </TouchableOpacity>
                                {abc ? <View>
                                    <TouchableOpacity style={{ backgroundColor: 'red' }}>
                                        <Text>adsfdsfsdfdsfs</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: 'red' }}>
                                        <Text>adsfdsfsdfdsfs</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: 'red' }}>
                                        <Text>adsfdsfsdfdsfs</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: 'red' }}>
                                        <Text>adsfdsfsdfdsfs</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: 'red' }}>
                                        <Text>adsfdsfsdfdsfs</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: 'red' }}>
                                        <Text>adsfdsfsdfdsfs</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: 'red' }}>
                                        <Text>adsfdsfsdfdsfs</Text>
                                    </TouchableOpacity>
                                </View> : null}
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
                            <Text>Tuổi</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 20, height: 40, width: 250 }}></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
                            <Text>Tình trạng</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 20, height: 40, width: 250 }}></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5, zIndex: 10 }}>
                            <Text>Đi học</Text>
                            <DropDownPicker
                                items={diHoc}
                                defaultValue={1}
                                style={{ width: Width(60) }}
                                containerStyle={{ height: 40, justifyContent: 'center', borderWidth: 1 }}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                dropDownStyle={{ justifyContent: 'center' }}
                                onChangeItem={(value) => this.setState({ isSelect: value.label })}>
                            </DropDownPicker>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={{
                                justifyContent: 'center', alignItems: 'center',
                                marginTop: 10, backgroundColor: colors.colorBlueP, width: 100, height: 30, borderRadius: 10
                            }}>
                                <Text>Cập nhật</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        )
    }
}
