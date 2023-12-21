import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Feeds = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
            <Text>Feeds</Text>
        </View>
    )
}

export default Feeds;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: R.colors.white,
    },
})