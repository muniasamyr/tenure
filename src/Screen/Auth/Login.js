import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput, Checkbox } from 'react-native-paper';
import Button from '../../Component/Button'
import { FONTS } from '../../Fonts/Fonts'
import { STORAGE_CONSTANT } from '../../Constant/Constant'
import { setData } from '../../Helper/StrorageHelper'
import {COLORS} from '../../Constant/Colors'
import { EMAIl, PASSWORD_LENGTH, PASSWORD } from '../../Constant/Constant'
var { height, width } = Dimensions.get('window')
const LoginScreen = (props) => {
  const [pwd, setPwd] = useState('');
  const [userEntry, setUserEntry] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState(false);
  const _onDone = () => {
    if (userEntry === '' && pwd === '') {
      setErrorMsg(true)
      return true
    } else {
      setErrorMsg(false)

    }
    if (PASSWORD !== pwd) {

      setPasswordErrorMsg(true)
      return true


    }
    setData(STORAGE_CONSTANT.LOGED_IN, '1')
    props.navigation.navigate('HomeScreen')

  }
  const setPwdFunction = (pwd) => {
    let storePwd = pwd.trim();


    setPwd(storePwd)
  }
  return <View style={styles.container}>
    <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }} keyboardDismissMode="none">
      <View style={{ flex: 0.1 }}></View>
      <View style={{ flex: 0.1, marginLeft: 10 }}>
        <Text style={styles.welcomText}>Welcome Back!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Email or Username"
          mode="outlined"
          outlineColor='#757575'
        
          style={{ margin: 20 ,backgroundColor:COLORS.white_theme}}
          onChangeText={text => setUserEntry(text.trim())}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            label="Password"
            mode="outlined"
            value={pwd}
            underlineColorAndroid = "transparent"
            style={styles.inputStyle}
            secureTextEntry={hidePassword}
            theme={{ colors: { placeholder: passwordErrorMsg === true ? 'red' : '#757575' } }}
            outlineColor={passwordErrorMsg === true ? 'red' : '#757575'}
            right={<TextInput.Icon size={25} name={require('../../Image/Visible.png')} color={hidePassword === true ? "#CCCCCC" : COLORS.primary_theme} onPress={() => setHidePassword(!hidePassword)} />}
            onChangeText={pwd => setPwdFunction(pwd)}
          />
        </View>
        {passwordErrorMsg == true ?
          <View style={{ flex: 0.01, marginLeft: 20, marginTop: -10 }}>
            <Text style={styles.errorMsgStyle}>Incorrect Password</Text>
          </View> : null}
        <Text style={{ textAlign: 'right', marginRight: 30,fontSize:12,fontFamily:FONTS.PROXIMA_NOVA }} onPress={() => props.navigation.navigate('ForgotPasswordScreen')}>Forgot Password?</Text>
        {ErrorMsg == true ?
          <View style={{ flex: 0.01, marginLeft: 20, marginTop: 10 }}>
            <Text style={styles.errorMsgStyle}>Kindly fill all the field</Text>
          </View> : null}
      </View>
      <View style={{ flex: 0.25 }}></View>
      <View style={{ flex: 0.02, alignSelf: 'center', marginLeft: width / 3 }}>
        <Button
          click={_onDone}
          textColor={COLORS.white_theme}

          fontSize={19}
          width={120}
          textMarginTop={12}
          backgroundColor={COLORS.primary_theme}
          title={'Login'}
        />
      </View>
      <View style={{ flex: 0.1, marginTop: 10 }}>
        <Text style={styles.signUpStyle} onPress={() => props.navigation.navigate('SignUpScreen')}>Signup</Text>
      </View>
    </KeyboardAwareScrollView>
  </View>;
};

const styles = StyleSheet.create({
  container:{ flex: 1, backgroundColor:COLORS.background_theme },
  text: { fontSize: 30},
  passwordContainer: {flexDirection: 'row', paddingBottom: 10,  marginHorizontal: 20, marginVertical: 20, alignItems: 'center', height: 55, fontSize: 16},
  inputStyle: {flex: 1,backgroundColor: COLORS.white_theme},
  welcomText:{ fontFamily: FONTS.PROXIMA_NOVA, fontWeight: 'bold', fontSize: 28, marginTop: 15, marginLeft: 20 },
  inputContainer:{ flex: 0.31, backgroundColor: COLORS.white_theme, margin: 15, borderRadius: 20,elevation:3 },
  errorMsgStyle:{ fontFamily: FONTS.PROXIMA_NOVA, fontSize: 12, color: COLORS.error_theme,marginLeft:12 },
  signUpStyle:{ textAlign: 'center', color: COLORS.primary_theme, fontWeight: 'bold', marginLeft: 20 }
});

export default LoginScreen;