import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, Text, TextInput } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MainApp } from './src/router/MainApp';


const Stack = createStackNavigator();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
    TextInput.defaultProps.autoCapitalize = "none";
    TextInput.defaultProps.autoCorrect = false;
    TextInput.defaultProps.spellCheck = false;
    KeyboardAwareScrollView.defaultProps = KeyboardAwareScrollView.defaultProps || {};
    KeyboardAwareScrollView.defaultProps.keyboardShouldPersistTaps = 'always'
    ScrollView.defaultProps = ScrollView.defaultProps || {};
    ScrollView.defaultProps.showsHorizontalScrollIndicator = false
    ScrollView.defaultProps.showsVerticalScrollIndicator = false
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RootMain" headerMode={'none'} mode="none">
          <Stack.Screen name="RootMain" component={MainApp} />
        </Stack.Navigator>
        <FlashMessage
          position="top"
          style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
        />
      </NavigationContainer>
    );
  }
}
