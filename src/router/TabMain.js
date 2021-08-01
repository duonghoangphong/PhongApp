
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from '../screen/Home/HomeScreen'
import SettingScreen from '../screen/Setting/SettingScreen'
import Information from '../screen/Information/InformationScreen'
import Notification from '../screen/Notification/NotificationScreen'
import MyInfor from '../screen/Boss/MyInfor'
import TabbarHome from './Tabbar/TabbarHome'

const StackTabHome = createStackNavigator();
const Stack_TabHome = () => {
    return (
        <StackTabHome.Navigator headerMode={'none'} >
            <StackTabHome.Screen name={'sc_Home'} component={HomeScreen} />
        </StackTabHome.Navigator>
    )
}
const StackTabSetting = createStackNavigator();
const Stack_TabSetting = () => {
    return (
        <StackTabSetting.Navigator headerMode={'none'} >
            <StackTabSetting.Screen name={'sc_Setting'} component={SettingScreen} />
        </StackTabSetting.Navigator>
    )
}
const StackTabInformation = createStackNavigator();
const Stack_TabInformation = () => {
    return (
        <StackTabInformation.Navigator headerMode={'none'} >
            <StackTabInformation.Screen name={'sc_Information'} component={Information} />
        </StackTabInformation.Navigator>
    )
}
const StackTabNotification = createStackNavigator();
const Stack_TabNotification = () => {
    return (
        <StackTabNotification.Navigator headerMode={'none'} >
            <StackTabNotification.Screen name={'sc_Notification'} component={Notification} />
        </StackTabNotification.Navigator>
    )
}
const StackTabMyInfor = createStackNavigator();
const Stack_TabMyInfor = () => {
    return (
        <StackTabMyInfor.Navigator headerMode={'none'} >
            <StackTabMyInfor.Screen name={'sc_MyInfor'} component={MyInfor} />
        </StackTabMyInfor.Navigator>
    )
}

const Tab = createBottomTabNavigator();
export const TabMain = ({ navigation, route }) => {
    return (
        <Tab.Navigator
            lazy={true}
            // enimationEnalbed={true}

            tabBar={props => (<TabbarHome {...props} />)}
            initialRouteName={'tab_Home'}>
            <Tab.Screen name="tab_MyInfor" component={Stack_TabMyInfor} />
            <Tab.Screen name="tab_Notification" component={Stack_TabNotification} />
            <Tab.Screen name="tab_Home" component={Stack_TabHome} />
            <Tab.Screen name="tab_Information" component={Stack_TabInformation} />
            <Tab.Screen name="tab_Setting" component={Stack_TabSetting} />
            {/* <Tab.Screen
                options={({ route }) => ({
                    tabBarVisible: false
                })}
                name="tab_Mesage" component={RouterChat} /> */}
        </Tab.Navigator>
    )
}

