import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { colors } from '../styles/color'
import { reText, sizes } from '../styles/size'
import { nstyles, Width, Height } from '../styles/styles'
import { TabView } from 'react-native-tab-view'
import Utils from '../app/Utils'
import getDSNhanVien from '../apis/getDSNhanVien'
import getDSTinhTrang from '../apis/getDSTinhTrang'
export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dsnv: [],
      dstt: [],
      index: 0,
      routes: [
        { key: '1', title: 'Tất cả' },
        { key: '2', title: 'Second' },
        { key: '3', title: 'Third' },
        { key: '4', title: 'Four' },
      ]
    }
  }
  componentDidMount = async () => {
    await this._getDSNhanVien();
  }
  _getDSNhanVien = async () => {
    let dsnv = await getDSNhanVien();
    this.setState({ dsnv: dsnv.data });
    let dstt = await getDSTinhTrang();
    console.log(dstt)
    this.setState({ dstt: dstt.data })
  }
  renderScene = (routes) => {
    console.log('==> routes: ', routes)
    switch (routes.route.idTinhTrang) {
      case 0:
        return (<View style={{ backgroundColor: 'green', flex: 1 }}>
          <View style={{ backgroundColor: colors.colorButtonGray }}>
            <FlatList
              extraData={this.state}
              // horizontal={true}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              data={this.state.dsnv}
            />
          </View>
        </View>)
        break;
      case 1:
        return <View style={{ backgroundColor: 'red', flex: 1 }}></View>
        break;
      case 2:
        return <View style={{ backgroundColor: 'red', flex: 1 }}></View>
        break;
      case 3:
        return (<View style={{ backgroundColor: 'blue', flex: 1 }}>
          <Text>aaa</Text>
        </View>)
        break;
      case 4:
        return <View style={{ backgroundColor: 'yellow', flex: 1 }}></View>
        break;
      default:
        break;
    }
  }
  renderTabBar = (props) => {
    console.log('==> props: ', props.navigationState.routes)
    var { index = 0 } = props.navigationState
    return (
      <View style={[nstyles.shadowTabTop, { height: 40, flexDirection: 'row' }]}>
        {props.navigationState.routes.map((x, i) => {
          return (
            <TouchableOpacity
              key={i.toString()}
              onPress={() => { this.setState({ index: i }) }}
              style={{
                backgroundColor: i == index ? colors.mediumGreen : 'white', flexDirection: 'row', flex: 1, justifyContent: 'center',
                margin: 2, borderTopLeftRadius: 5, borderTopRightRadius: 5
              }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text numberOfLines={1} style={{ color: i == index ? 'white' : 'black', textAlign: 'center', fontSize: sizes.sText15 }}>
                  {x.TinhTrang}
                </Text>
              </View>
            </TouchableOpacity>)
        })}
      </View>
    )
  }
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Image source={item.GioiTinh == 'Nam' ? require('../assets/icon_boy.png') : require('../assets/icon_girl.png')} style={[nstyles.nAva70, { marginHorizontal: 10 }]}></Image>
          <View>
            <Text>Tên: <Text style={{ color: 'red' }}>{item.Ten}</Text></Text>
            <Text>Họ và tên: <Text style={{ color: 'gray' }}>{item.HoTen}</Text></Text>
            <Text>Giới tính: <Text style={{ color: 'gray' }}>{item.GioiTinh}</Text></Text>
            <Text>SDT: <Text style={{ color: 'gray' }}>{item.SDT}</Text></Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    const { dsnv, routes, dstt, index } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
              <Image source={require('../assets/iconapp.png')} style={[nstyles.nIcon40, { marginHorizontal: 10 }]}></Image>
            </TouchableOpacity>
            <Text style={styles.headertitle}>Timekepping</Text>
            <TouchableOpacity>
              <Image source={require('../assets/icon_filtercolor.png')} style={[nstyles.nIcon35, { marginHorizontal: 10 }]}></Image>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1 }}>
            <TabView
              navigationState={{ index: index, routes: dstt }}
              renderTabBar={this.renderTabBar}
              renderScene={this.renderScene}
              onIndexChange={index => this.setState({ index: index })}
              initialLayout={{ width: Dimensions.get('window').width }}
            />
          </View>
        </View>
        <TouchableOpacity style={{ position: 'absolute', right: 20, bottom: 20 }}
          onPress={() => Utils.goscreen(this, 'Modal_AddNhanVien')}>
          <Image source={require('../assets/icon_add.png')} style={[nstyles.nIcon50, { marginHorizontal: 10, tintColor: colors.mediumGreen }]}></Image>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: Height(7),
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
