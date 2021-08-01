import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { StackRoot } from './StackRoot';

const StackModal = createStackNavigator();
export const MainApp = () => {
    return (
        <StackModal.Navigator
            mode={'modal'}
            headerMode={'none'}
            initialRouteName={'Root'}
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
                ...TransitionPresets.FadeFromBottomAndroid,
            }}>
            <StackModal.Screen name={'Root'} component={StackRoot} />

            {/* <StackModal.Screen name={'Modal_ChiTietLoaiphep'} component={Router.ModalChiTietSophep} /> */}
        </StackModal.Navigator>
    )
}
