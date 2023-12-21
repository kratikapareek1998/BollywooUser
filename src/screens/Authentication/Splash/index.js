import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
  ImageBackground
} from "react-native";
import R from "../../../res/R";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={R.icon.splash} style={styles.splashStyle}>
        <SafeAreaView>
          <StatusBar translucent backgroundColor='transparent' />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: R.colors.black,
  },
  splashStyle: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    resizeMode: 'stretch',
  },
});
