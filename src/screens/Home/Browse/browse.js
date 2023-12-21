import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Browse = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
            <Text>Browse</Text>
        </View>
    )
}

export default Browse;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: R.colors.white,
    },
})