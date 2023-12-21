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


const ForgotPassword = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>
            <Header
                onPressIcon={() => navigation.goBack()}
                tittleHeader={"Sign up"}
            />
            
                <View style={{ margin: 15, flex: 1 }}>

                    <View style={{ marginTop: 25 }}>
                        <Text style={styles.inputViewLabelTextStyle}>{R.strings.mobileNumber}</Text>
                        <View style={[styles.inputView]}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Mobile Number"
                            />
                        </View>
                    </View>

                </View>

                <View>
                    <TouchableOpacity style={styles.nextButtonStyle}>
                        <Text style={styles.nextButtonTextStyle}>{R.strings.next}</Text>
                    </TouchableOpacity>
                </View>
        </View>

    )
}

export default ForgotPassword;

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