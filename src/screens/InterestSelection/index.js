
import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, ImageBackground, Text } from 'react-native';
import R from '../../res/R';
import { useDispatch, useSelector } from 'react-redux';
import { getInterestSelection, postInterestSelection } from '../../Redux/action/interestSelectionActions';


const InterestSelection = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await dispatch(getInterestSelection())
        await dispatch(postInterestSelection())
    }

    const { getInterest } = useSelector((state) => state.interest);
    console.log('getInterest', getInterest);

    const {postInterest} = useSelector((state)=>state.interest);
    console.log("post interest worked", postInterest);

}
export default InterestSelection;