import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import R from "../../../res/R";
import { moderateScale } from "../../../utils/Scalling";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }) => {
  return (

    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor='transparent' />
      <ImageBackground source={R.icon.loginBGLogo} style={styles.loginBGLogoStyle} >
        <SafeAreaView>
          <View>
            <Text style={styles.welcomeToWooTextStyle}>{R.strings.welcomeToWoo}</Text>
            <Text style={styles.simpleDummyTextStyle}>{R.strings.simpleDummyDesctiption}</Text>
            <View style={[styles.inputView, { marginTop: 44 }]}>
              <TextInput
                style={styles.input}
                placeholder="Enter Email"
              />
            </View>

            <View style={[styles.inputView, { marginTop: 24 }]}>
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
              />
            </View>

            <View style={{ marginRight: 15, marginTop: 8 }}>
              <TouchableOpacity
              onPress={() => { navigation.navigate('ForgotPassword') }} 
              style={{ alignItems: 'flex-end' }}
              >
                <Text style={styles.forgotPasswordTextStyle}>{R.strings.forgotPassword}</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity 
              style={styles.signInButtonStyle}
              onPress={() => { navigation.navigate("OTPVerification") }}
              >
                <Text style={styles.signInButtonTextStyle}>{R.strings.signIn}</Text>
              </TouchableOpacity>
            </View>

          </View>
        </SafeAreaView>
        <View style={styles.signupButtonViewStyle}>
          <Text style={styles.dontHaveAccountTextStyle}>{R.strings.dontHaveAccount}</Text>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Signup') }}
          >
            <Text style={styles.signupTextStyle}>{R.strings.signUp}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: R.colors.black,
  },
  loginBGLogoStyle: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    resizeMode: 'stretch',
  },
  welcomeToWooTextStyle: {
    color: R.colors.white,
    marginLeft: moderateScale(15),
    marginTop: '40%',
    fontSize: moderateScale(28)
  },
  simpleDummyTextStyle: {
    color: R.colors.white,
    marginLeft: moderateScale(15),
    marginTop: 5,
    fontSize: moderateScale(15),
    fontWeight: '200'
  },
  inputView: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 15,
    marginRight: 15,
  },
  input: {
    height: 48,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 18,
    borderRadius: 10,
    color: R.colors.white,
    backgroundColor: 'rgba(236, 236, 236, 0.36)',
  },
  signInButtonStyle: {
    height: 48,
    marginTop: 50,
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: R.colors.white,
    borderRadius: 8
  },
  signInButtonTextStyle: {
    fontSize: moderateScale(15),
    alignSelf: 'center',
    fontWeight: '500',
    color: R.colors.black
  },
  forgotPasswordTextStyle: {
    color: '#ff8567',
    fontSize: moderateScale(15)
  },
  signupButtonViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center'
  },
  dontHaveAccountTextStyle: {
    color: R.colors.white,
    fontSize: moderateScale(15),
    fontWeight: '500'
  },
  signupTextStyle: {
    color: '#ff8567',
    fontSize: moderateScale(15),
    paddingLeft: 5
  },
});
