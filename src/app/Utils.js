import { appConfig } from './Config';
import AsyncStorage from '@react-native-community/async-storage';
import { nGlobalKeys } from '../app/data/globalKey';
import { AppsetGlobal, AppgetGlobal, AppgetRootGlobal, ROOTGlobal, } from '../app/data/dataGlobal';

function nlog(...val) {
  console.log(...val);
}
//==================================================
async function nsetStore(keys, value) {
  if (typeof value !== 'string')
    value = JSON.stringify(value);
  await AsyncStorage.setItem(keys, value);
}
async function ngetStore(keys, defaultValue = null) {
  let temp = await AsyncStorage.getItem(keys);
  if (temp == null)
    return defaultValue;
  try {
    let tempValue = JSON.parse(temp);
    return tempValue;
  } catch (error) {
    return temp;
  }
}
function getGlobal(keys, defaultValue) {
  return AppgetGlobal(keys, defaultValue);
}
function setGlobal(keys, value) {
  AppsetGlobal(keys, value);
}
//==================================================
function getRootGlobal(keys, defaultValue) {
  return AppgetRootGlobal(keys, defaultValue);
}
//==================================================
async function get_apiToken(strUrl, showMsg = true, chktoken = true) {
  const res = await post_apiToken(strUrl, '', showMsg, chktoken);
  return res;
}
async function post_apiToken(strUrl, strBody = '', showMsg = false, chktoken = true,) {
  const res = await post_apiTokenHeader(strUrl, strBody, {}, showMsg, chktoken);
  return res;
}
async function post_apiTokenHeader(strUrl, strBody = '', header = {}, showMsg = false, chktoken = true,) {
  // console.log('strBody' + strBody);
  var smethod = 'POST';
  if (strBody == '')
    smethod = 'GET';
  let token = await ngetStore(nGlobalKeys.loginToken);
  // if ((token == null || token.length < 3) && chktoken) {
  // if (showMsg) Alert.alert('Bảo mật', 'Không tồn tại token người dùng');
  // return -2;
  // }
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Token: '123',
    ...header,
  };
  console.log('Token', token);
  url = appConfig.domain + strUrl;
  // console.log('headers ' + JSON.stringify(headers), url);
  try {
    const response = await fetch(url, {
      method: smethod,
      headers: headers,
      body: strBody,
    });
    const res = await response.json();
    if (res.ExceptionMessage != undefined) {
      // edit tuỳ từng object api
      nlog('[API]Lỗi API:', res);
      return -3;
    }
    return res;
  } catch (error) {
    nlog('[API]Lỗi error:', error);
    if (showMsg)
      // Alert.alert("Lỗi mạng", "Kết nối server thất bại")
      return -1;
  }
}
async function post_api(strUrl, strBody = '', showMsg = false, chktoken = false,) {
  var smethod = 'POST';
  if (strBody == '') smethod = 'GET';
  let token = await ngetStore(nGlobalKeys.loginToken);
  if ((token == null || token.length < 3) && chktoken) {
    // if (showMsg) Alert.alert('Bảo mật', 'Không tồn tại token người dùng');
    return -2;
  }
  try {
    const response = await fetch(appConfig.domain + strUrl, {
      method: smethod,
      headers: {
        Accept: 'application/json',
        'Accept-Encoding': 'gzip',
        'Content-Type': 'application/json',
      },
      body: strBody,
    });
    const res = await response.json();
    // console.log('repson', res);
    if (res.ExceptionMessage != undefined) {
      // edit tuỳ từng object api
      nlog('[API]Lỗi API:', res);
      return -3;
    }
    return res;
  } catch (error) {
    nlog('[API]Lỗi error:', error);
    if (showMsg)
      // Alert.alert("Lỗi mạng", "Kết nối server thất bại")
      return -1;
  }
}
//==================================================
function replace(nthis, routeName) {
  try {
    nthis.props.navigation.reset({ index: 0, routes: [{ name: routeName }], });
  } catch (error) {
    nlog('ERROR:', error);
  }
}
function goscreen(nthis, routeName, param = null) {
  if (param) {
    nthis.props.navigation.navigate(routeName, { ...param, lang: nthis.lang });
  } else {
    nthis.props.navigation.navigate(routeName, { lang: nthis.lang });
  }
}
function goback(nthis, routeName = '') {
  if (routeName == '')
    nthis.props.navigation.goBack();
  else
    nthis.props.navigation.goBack(routeName);
}
function toggleDrawer(nthis, isClose = false, mode = 'toggleDrawer') {
  if (isClose)
    nthis.props.navigation.closeDrawer();
  else {
    nthis.props.navigation[mode]();
  }
}
//==================================================
function cutAString(value) {
  let str = value[0].split(' ');
  let ste = str.slice(str.length - 1) + '';
  return ste.slice(0, 1);
}
function removeAccents(str) {
  return String(str)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}
export default {
  nlog,
  goscreen, replace, toggleDrawer, goback,
  post_api, post_apiTokenHeader, get_apiToken,
  nsetStore, ngetStore, getGlobal, setGlobal,
  getRootGlobal,
  removeAccents, cutAString,
};
