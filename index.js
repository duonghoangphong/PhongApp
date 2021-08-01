/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import test from './src/screen/LoginScreen'

YellowBox.ignoreWarnings(["Require cycle:", "Remote debugger"]);
YellowBox.ignoreWarnings(['Remote debugger']);
YellowBox.ignoreWarnings(["", ""]);


AppRegistry.registerComponent(appName, () => App);
