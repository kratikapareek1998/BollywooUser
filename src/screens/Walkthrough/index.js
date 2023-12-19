
import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, ImageBackground, Text } from 'react-native';
import R from '../../res/R';
import { useDispatch, useSelector } from 'react-redux';
import { walkthroughData } from '../../Redux/action/walkthroughActions';
import { commonApi } from '../../api/CommonApi';
import { BASE_URL } from '../../api/index'
import { WALKTHROUGH } from '../../api/EndPoints';

const Walkthrough = () => {
    const dispatch = useDispatch();

    const { walkthrough } = useSelector((state) => state.walkthrough)
    console.log("api response", walkthrough)

    useEffect(() => {
        dispatch(walkthroughData())
    }, [])

}
export default Walkthrough