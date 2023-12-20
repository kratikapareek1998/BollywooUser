
import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import R from '../../res/R';
import { useDispatch, useSelector } from 'react-redux';
import { getInterestSelection, postInterestSelection } from '../../Redux/action/interestSelectionActions';
import Header from "../../components/header";

const InterestSelection = () => {
    const dispatch = useDispatch();

    const getData = async () => {
        await dispatch(getInterestSelection())
        // await dispatch(postInterestSelection())
    }
    useEffect(() => {
        getData()
    }, [])

    const { getInterest } = useSelector((state) => state.interest);
    console.log('getInterest', getInterest);

    // const {postInterest} = useSelector((state)=>state.interest);
    // console.log("post interest worked", postInterest);


    const [selectedInterests, setSelectedInterests] = useState([]);

    const toggleInterest = (interest) => {
        const updatedInterests = selectedInterests.includes(interest)
            ? selectedInterests.filter((item) => item !== interest)
            : [...selectedInterests, interest];

        setSelectedInterests(updatedInterests);
    };

    const renderImages = () => {
        return getInterest?.data?.map((item, index) => {
            //number of images to display based on the row number
            const imagesInRow = index % 2 === 0 ? 2 : 3;

            //array of Image components for the current row
            const imagesForRow = Array.from({ length: imagesInRow }).map((_, i) => (
                <View>
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.interestContainer,
                            {
                                borderColor: "green",
                                borderWidth: selectedInterests.includes(item.type) ? 4 : 0,
                                backgroundColor: 'black',
                            },
                        ]}
                        onPress={() => toggleInterest(item.type)}
                    >
                        <Image key={index + i} source={item?.image} style={{ resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={styles.interestText}>{item.type}</Text>
                </View>
            ));

            return (
                <View key={index} style={styles.rowContainer}>
                    {imagesForRow}
                </View>
            );
        });
    };

    return (
        <ScrollView >
            <Header
                onPressIcon={() => navigation.goBack()}
                tittleHeader={"Your Interests"}
            />
            {renderImages()}
            <TouchableOpacity
                style={[styles.applyButtonStyle, { backgroundColor: R.colors.black }]}
                onPress={() => handleApply()}
            >
                <Text style={[styles.applyButtonTextStyle, { color: R.colors.white }]}>{R.strings.apply}</Text>
            </TouchableOpacity>
        </ScrollView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:Dimensions.height,
        width:Dimensions.width
    },
    rowContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },

    interestContainer: {
        width: 72,
        height: 72,
        borderRadius: 36,
        top:24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    interestText: {
        color: 'black',
        textAlign: 'center',
        top: 24,
    },
    applyButtonStyle: {
        height: 48,
        bottom:10,
        width: Dimensions.get('window').width - 30,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    applyButtonTextStyle: {
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: '500',
    },
});
export default InterestSelection;