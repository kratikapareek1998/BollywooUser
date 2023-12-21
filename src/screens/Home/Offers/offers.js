import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Offers = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
            <Text>Offers</Text>
        </View>
    )
}

export default Offers;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: R.colors.white,
    },
})