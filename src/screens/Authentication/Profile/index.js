import React, { useState } from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Header from "../../../components/header";
import { moderateScale } from "../../../utils/Scalling";
import R from "../../../res/R";

const Profile = ({ navigation }) => {
    const handleSkip = () => {
        console.log("Skip Button Tap");
    };
    const handleApply = () => {
        navigation.navigate("BottomTab");
    };

    return (
        <View style={styles.mainContainer}>
            <Header
                onPressIcon={() => navigation.goBack()}
                tittleHeader={"Profile"}
            />

            <View style={styles.childContainerStyle}>
                <Text style={styles.chooseImageTextStyle}>Choose your profile picture</Text>

                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.userImageViewStyle}
                        source={R.icon.userProfile}
                    />

                    <TouchableOpacity style={styles.cameraButtonStyle}>
                        <Image
                            style={styles.cameraImageStyle}
                            source={R.icon.camera}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.applyAndSkipViewStyle}>
                    <TouchableOpacity
                        style={[styles.applyButtonStyle, { backgroundColor: R.colors.lightGray }]}
                    onPress={() => handleSkip()}
                    >
                        <Text style={[styles.applyButtonTextStyle, { color: R.colors.black }]}>{R.strings.skip}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.applyButtonStyle, { backgroundColor: R.colors.black }]}
                    onPress={() => handleApply()}
                    >
                        <Text style={[styles.applyButtonTextStyle, { color: R.colors.white }]}>{R.strings.apply}</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: R.colors.white,
    },
    childContainerStyle: {
        margin: 15,
        flex: 1
    },
    chooseImageTextStyle: {
        fontSize: 15,
        color: R.colors.black
    },
    userImageViewStyle: {
        width: 140,
        height: 140,
        marginTop: 44,
        resizeMode: 'contain'
    },
    cameraButtonStyle: {
        backgroundColor: R.colors.white,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        bottom: 0,
        right: '35%',
        borderRadius: 20
    },
    cameraImageStyle: {
        width: 30,
        height: 30
    },
    applyAndSkipViewStyle: {
        position: 'absolute',
        bottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: Dimensions.get('window').width - 30
    },
    applyButtonStyle: {
        height: 48,
        marginTop: 10,
        width: Dimensions.get('window').width / 2 - 30,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    applyButtonTextStyle: {
        fontSize: moderateScale(15),
        alignSelf: 'center',
        fontWeight: '500',
    },
});