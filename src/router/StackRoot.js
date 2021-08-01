import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from '../screen/LoginScreen'
import { Stack } from './StackMain'

const RootStack = createStackNavigator();
export const StackRoot = () => {
    return (
        <RootStack.Navigator
            headerMode="none"
            initialRouteName={"PhongApp"}
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
                ...TransitionPresets.RevealFromBottomAndroid,
            }}
        >
            <RootStack.Screen name={"PhongApp"} component={Stack.StackMain} />
            <RootStack.Screen name={"sc_Login"} component={Login} />
        </RootStack.Navigator>
    )
}
