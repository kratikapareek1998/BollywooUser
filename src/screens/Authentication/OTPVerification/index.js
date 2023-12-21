import React, { useState } from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Header from "../../../components/header";
import { moderateScale } from "../../../utils/Scalling";
import R from "../../../res/R";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const OTPVerification = ({ navigation }) => {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <View style={styles.mainContainer}>
            <Header
                onPressIcon={() => navigation.goBack()}
                tittleHeader={"Verification"}
            />

            <View style={{ margin: 15, flex: 1 }}>

                <View style={styles.inputContainerView}>
                    <Text style={{ fontSize: moderateScale(15), fontWeight: '300', color: R.colors.black }}>We have sent a confirmation OTP to +91 8223809521 </Text>
                    <Text style={styles.mobileText}>Enter OTP</Text>

                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </View>

            </View>

            <View>
                <TouchableOpacity
                    style={styles.submitButtonStyle}
                    onPress={() => { navigation.navigate('Profile') }}
                >
                    <Text style={styles.submitButtonTextStyle}>{R.strings.submit}</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default OTPVerification;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: R.colors.white,
    },
    mobileText: {
        color: "black",
        fontWeight: "500",
        fontSize: moderateScale(16),
        marginTop: 30,
    },
    root: {
        flex: 1,
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    codeFieldRoot: {
        marginTop: 20
    },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
        borderRadius: 10
    },
    focusCell: {
        borderColor: '#000',
    },
    underlineStyleBase: {
        borderRadius: 10,
        backgroundColor: "#F2F3F2",
        fontSize: 18,
        color: "black",
    },
    submitButtonStyle: {
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
    submitButtonTextStyle: {
        fontSize: moderateScale(15),
        alignSelf: 'center',
        fontWeight: '500',
        color: R.colors.white
    },
});