import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as React from 'react'
import Splash from '../screen/SplashScreen'
import SettingScreen from '../screen/SettingScreen'
import ChamCong from '../screen/ChamCongScreen'
import { TabMain } from './TabMain';
import { Router } from './Router'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuCustom from '../components/MenuCustom'


const stack_AllMenu = createStackNavigator();
const StackAllMenu = () => {
    return (
        <stack_AllMenu.Navigator headerMode={'none'} initialRouteName={'sc_AllMenu'}>
            <stack_AllMenu.Screen name={'sc_AllMenu'} component={Router.AllMenu} />
        </stack_AllMenu.Navigator>
    )
}
const Drawer_test = createDrawerNavigator();
const DrawerTest = ({ navigator, route }) => {
    return (
        <Drawer_test.Navigator
            initialRouteName="sc_Setting"
            drawerContent={props => <MenuCustom navigation={props.navigation} {...props}></MenuCustom>}
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                // style: {borderWidth: 1}
            }}
        >
            <Drawer_test.Screen name="sc_Setting" component={SettingScreen} options={{ title: 'Trang Chủ' }}></Drawer_test.Screen>
            <Drawer_test.Screen name="sc_t" component={SettingScreen} options={{ title: 'Trang Chủ' }}></Drawer_test.Screen>
            <Drawer_test.Screen name="sdfsdf" component={SettingScreen} options={{ title: 'Trang Chủ' }}></Drawer_test.Screen>
            <Drawer_test.Screen name="sdd" component={SettingScreen} options={{ title: 'Trang Chủ' }}></Drawer_test.Screen>
            <Drawer_test.Screen name="sdfds" component={SettingScreen} options={{ title: 'Trang Chủ' }}></Drawer_test.Screen>
            <Drawer_test.Screen name="ss" component={SettingScreen} options={{ title: 'Trang Chủ' }}></Drawer_test.Screen>
        </Drawer_test.Navigator>
    )
}
// const stack_QuanLyChamCong = createBottomTabNavigator();
// const StackQuanLyChamCong = ({ navigation, route }) => {
//     return (
//         <stack_QuanLyChamCong.Navigator tabBar={props => (<QuanLyChamCong {...props} />)} initialRouteName={'sc_ccvitri'}>
//             <stack_QuanLyChamCong.Screen name="sc_ccwifi" component={Router.QuanLyCCWifi} />
//             <stack_QuanLyChamCong.Screen name="sc_ccvitri" component={Router.QuanLyCCViTri} />
//         </stack_QuanLyChamCong.Navigator>
//     )
// }
// const Tab = createBottomTabNavigator();
// export const TabMain = ({ navigation, route }) => {
//     return (
//         <Tab.Navigator
//             lazy
//             tabBar={props => (<TabbarJee {...props} />)}
//             initialRouteName={'tab_Home'} >
//             <Tab.Screen name="tab_Social"
//                 component={Stack_TabSocial}
//                 options={({ route }) => ({
//                     tabBarVisible: false
//                 })}
//             />
//             <Tab.Screen name="tab_Noti" component={Stack_Noti} />
//             <Tab.Screen name="tab_Home" component={Stack_TabHome} />
//             <Tab.Screen
//                 options={({ route }) => ({
//                     tabBarVisible: false
//                 })}
//                 name="tab_Mesage" component={RouterChat} />
//             <Tab.Screen name="tab_Setting" component={Stack_Setting} />
//         </Tab.Navigator>
//     )
// }

const RootStack = createStackNavigator();
const StackMain = () => {
    return (
        <RootStack.Navigator
            initialRouteName={'sw_Root'}
            headerMode={'none'}
            screenOptions={{
                cardStyle: { backgroundColor: 'transparent' },
                animationEnabled: true,
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0, 0.5, 0.9, 1],
                            outputRange: [0, 0.25, 0.7, 1],
                        }),
                    },
                    overlayStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 0.2],
                            extrapolate: 'clamp',
                        }),
                    },

                }),
                ...TransitionPresets.ScaleFromCenterAndroid,
            }}
        >
            <RootStack.Screen name={"sw_Root"} component={Splash} />
            <RootStack.Screen name={"sw_HomePage"} component={TabMain} />
            <RootStack.Screen name={"sc_Test"} component={ChamCong} />
            <RootStack.Screen name={"sc_AllMenu"} component={Stack.StackAllMenu} />
            <RootStack.Screen name={"sc_Drawer"} component={DrawerTest} />
        </RootStack.Navigator>
    )
}

export const Stack = { StackMain, StackAllMenu, DrawerTest }
