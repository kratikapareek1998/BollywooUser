import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Trending = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
            <Text>Trending</Text>
        </View>
    )
}

export default Trending;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: R.colors.white,
    },
})