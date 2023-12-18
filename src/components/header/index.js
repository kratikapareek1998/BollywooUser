import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from "react-native";
import React from "react";
import R from "../../res/R";

const Header = ({ onPressIcon, tittleHeader }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onPressIcon} style={{ marginLeft: 15 , position: 'absolute', bottom: 15}}>
                <Image
                    source={R.icon.backIcon}
                />
            </TouchableOpacity>
            <Text style={styles.titleHeader}>{tittleHeader}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: R.colors.white,
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,

    },
    title: {
        alignSelf: "center",
    },
    icon: {
        alignSelf: "center",
    },
    titleHeader: {
        fontSize: 18,
        color: R.colors.black,
        fontWeight: "600",
        marginLeft: '40%',
        position:'absolute',
        bottom: 15,
    },
});
