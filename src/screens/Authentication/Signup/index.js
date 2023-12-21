import React from "react";
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Header from "../../../components/header";
import { moderateScale } from "../../../utils/Scalling";
import R from "../../../res/R";


const Signup = ({ navigation }) => {

    const handlePrivacyPolicy = () => {
        console.log("Privacy Button Tap")
    }

    const handleTermsAndCondition = () => {
        console.log("Terms and Condition Button Tap")
    }

    return (
        <View style={styles.mainContainer}>
            <Header
                onPressIcon={() => navigation.goBack()}
                tittleHeader={"Sign up"}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ margin: 15, flex: 1 }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.inputViewLabelTextStyle}>{R.strings.name}</Text>
                        <View style={[styles.inputView]}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Email"
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 25 }}>
                        <Text style={styles.inputViewLabelTextStyle}>{R.strings.emailAddress}</Text>
                        <View style={[styles.inputView]}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Email"
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 25 }}>
                        <Text style={styles.inputViewLabelTextStyle}>{R.strings.mobileNumber}</Text>
                        <View style={[styles.inputView]}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Mobile Number"
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 25 }}>
                        <Text style={styles.inputViewLabelTextStyle}>{R.strings.password}</Text>
                        <View style={[styles.inputView]}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Password"
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Text style={styles.byCreatingTextStyle}>By creating an account, You agree to the Bollywoo
                            <Text
                                onPress={() => handlePrivacyPolicy()}
                                style={styles.privacyPolicyTextStyle}> Privacy Policy.
                            </Text> and
                            <Text
                                onPress={() => handleTermsAndCondition()}
                                style={styles.privacyPolicyTextStyle}> Terms and Conditions
                            </Text>
                        </Text>
                    </View>

                </View>

                <View>
                    <TouchableOpacity style={styles.nextButtonStyle}>
                        <Text style={styles.nextButtonTextStyle}>{R.strings.next}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}

export default Signup;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: R.colors.white,
    },
    inputView: {
        backgroundColor: 'rgba(0,0,0,0)',
    },
    input: {
        height: 48,
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 18,
        borderRadius: 10,
        color: R.colors.black,
        backgroundColor: 'rgba(246, 246, 249, 1.0)',
    },
    inputViewLabelTextStyle: {
        fontSize: moderateScale(13),
        fontWeight: '300',
        color: R.colors.black
    },
    privacyPolicyTextStyle: {
        color: '#ff8567',
        fontSize: moderateScale(15)
    },
    byCreatingTextStyle: {
        flex: 1,
        flexWrap: 'wrap',
        color: R.colors.black,
        fontSize: moderateScale(15)
    },
    nextButtonStyle: {
        height: 48,
        marginTop: 10,
        width: Dimensions.get('window').width - 30,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: R.colors.black,
        borderRadius: 8,
        position: 'absolute',
        bottom: 25,
    },
    nextButtonTextStyle: {
        fontSize: moderateScale(15),
        alignSelf: 'center',
        fontWeight: '500',
        color: R.colors.white
    },
});