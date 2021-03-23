import React, { Component } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from '../screen/HomeScreen';
import MenuCustom from '../components/MenuCustom'
import TinhTienLuong from '../screen/TinhLuongBanThan'
import ChamCong from '../screen/ChamCongScreen'
import HomeTest from '../test/HomeTest'
import Setting from '../screen/SettingScreen'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Drawer.Navigator
        initialRouteName="RootStack"
        drawerContent={props => <MenuCustom navigation={props.navigation} {...props}></MenuCustom>}
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          // style: {borderWidth: 1}
        }}
      >
        <Drawer.Screen name="RootStack" component={RootStack} options={{ title: 'Trang Chủ' }}></Drawer.Screen>
        <Drawer.Screen name="scTinhTienLuong" component={TinhTienLuong} options={{ title: 'Tính tiền lương bản thân' }}></Drawer.Screen>
        <Drawer.Screen name="scChamCong" component={ChamCong} options={{ title: 'Chấm công nhân viên' }}></Drawer.Screen>
        <Drawer.Screen name="scHomeTest" component={HomeTest} options={{ title: 'Home' }}></Drawer.Screen>
      </Drawer.Navigator>
    );
  }
}
export class RootStack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarLabel: route.name == 'ChamCong' ? 'Chấm Công' : route.name,
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case 'ChamCong':
                return (
                  <Image
                    source={require('../assets/icon_add.png')}
                    style={{
                      height: focused ? 26 : 25,
                      width: focused ? 26 : 25,
                      tintColor: focused ? 'orange' : 'gray',
                    }}></Image>
                );
                break;
              case 'Home':
                return (
                  <Image
                    source={require('../assets/icon_home.png')}
                    style={{
                      position: 'absolute',
                      height: focused ? 26 : 25,
                      width: focused ? 26 : 25,
                      tintColor: focused ? 'orange' : 'gray',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}></Image>
                );
                break;
              case 'Information':
                return (
                  <Image
                    source={require('../assets/icon_user.png')}
                    style={{
                      height: focused ? 26 : 25,
                      width: focused ? 26 : 25,
                      tintColor: focused ? 'orange' : 'gray',
                    }}></Image>
                );
                break;
              case 'Setting':
                return (
                  <Image
                    source={require('../assets/icon_settings.png')}
                    style={{
                      height: focused ? 26 : 25,
                      width: focused ? 26 : 25,
                      tintColor: focused ? 'orange' : 'gray',
                    }}></Image>
                );
                break;
              case 'Notification':
                return (
                  <View>
                    <View>
                      <Image
                        source={require('../assets/icon_notification.png')}
                        style={{
                          height: focused ? 26 : 25,
                          width: focused ? 26 : 25,
                          tintColor: focused ? 'orange' : 'gray',
                        }}></Image>
                    </View>
                    <View
                      style={{
                        position: 'absolute',
                        right: -10,
                        top: -10,
                        backgroundColor: 'orange',
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        numberOfLines={1}
                        style={{
                          fontSize: 12,
                        }}>
                        {this.state.soluong}
                      </Text>
                    </View>
                  </View>
                );
                break;
              default:
                break;
            }
          },
        })}
        tabBarOptions={{
          // inactiveBackgroundColor: '#C7EAFF',
          // activeBackgroundColor: 'yellow',
          activeTintColor: 'orange',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="ChamCong" component={ChamCong}></Tab.Screen>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Setting" component={Setting}></Tab.Screen>
      </Tab.Navigator>
    );
  }
}
