
import React, { useCallback, memo, useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, ImageBackground, Text,FlatList,TouchableOpacity, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { walkthroughData } from '../../Redux/action/walkthroughActions';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const Walkthrough= ({ navigation }) =>{
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const { walkthrough } = useSelector((state) => state.walkthrough)
    console.log("api response", walkthrough)
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await dispatch(walkthroughData())
    }    

    const dataLength = walkthrough?.data?.length
    const slideList = Array.from({ length: dataLength }).map((_, i) => {
        console.log("image....", walkthrough?.data[i]?.image, "id....", walkthrough?.data[i]?.id)
        return {
            id: walkthrough?.data[i]?.id,
            image: walkthrough?.data[i]?.image,
            title: walkthrough?.data[i]?.title,
            subtitle: walkthrough?.data[i]?.description,
        };

    });

    const Slide = memo(function Slide({ data }) {
        return (
            <View style={styles.slide}>
                <ImageBackground source={{ uri: data.image }} style={styles.slideImage}>
                    <View style={{ top: 419, left: 16, }}>
                        <View style={{ flexDirection: "row", }}>
                            <Text style={{ fontSize: 28, lineHeight: 36, color: "white", textAlign: "left", width: "57%" }}>
                                {data.title}
                            </Text>
                            <View style={{ height: 2, width: "100%", backgroundColor: "white", marginTop: "13%" }}>
                            </View>
                        </View>
                        <Text style={{ top: 24, width: "85%", fontSize: 15, lineHeight: 29, color: "#707070" }}>{data.subtitle}</Text>
                    </View>


                </ImageBackground>

            </View>
        );
    });
    function Pagination({ index }) {
        return (

            <View style={styles.pagination} pointerEvents="none">
                {slideList.map((_, i) => {
                    return (
                        <View
                            key={i}
                            style={[
                                styles.paginationDot,
                                { backgroundColor: index === i ? 'white' : '#707070',
                                  width: index === i ? 80 : 40 },
                            ]}
                        />
                    );
                })}

            </View>
        );
    }

    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        // Prevent one pixel triggering setIndex in the middle
        // of the transition. With this we have to scroll a bit
        // more to trigger the index change.
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 16,
        windowSize: 2,
        keyExtractor: useCallback(s => String(s.id), []),
        getItemLayout: useCallback(
            (_, index) => ({
                index,
                length: windowWidth,
                offset: index * windowWidth,
            }),
            []
        ),
    };

    const renderItem = useCallback(function renderItem({ item }) {
        return <Slide data={item} />;
    }, []);

    return (
        <>
            <FlatList
                data={slideList}
                style={styles.carousel}
                renderItem={renderItem}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onScroll={onScroll}
                {...flatListOptimizationProps}
            />
            <Pagination index={index}></Pagination>
            <TouchableOpacity onPress={()=>{navigation.navigate("BottomTab")}}>
                <Text style={{ fontSize: 13, color: "white", right: 30, bottom: 30, padding: 2, position: "absolute" }}>Skip</Text>
            </TouchableOpacity>
        </>
    );

}

const styles = StyleSheet.create({
    slide: {
        height: windowHeight,
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
    },
    slideImage: { width: windowWidth, height: windowHeight, resizeMode: "contain" },
    slideTitle: { fontSize: 24 },
    slideSubtitle: { fontSize: 18 },

    pagination: {
        position: "absolute",
        bottom: 40,
        left: 16,
        width: "100%",
        justifyContent: "start",
        flexDirection: "row",

    },
    paginationDot: {
        height: 2,
        marginHorizontal: 5,
    },
    carousel: { flex: 1 },
});

export default Walkthrough

