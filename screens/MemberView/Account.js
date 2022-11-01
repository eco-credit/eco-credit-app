import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from "react-native";
import {useFocusEffect} from "@react-navigation/native"
import {useCallback} from "react"
import MapView from "react-native-maps"
import CardComponent from "../../components/CardComponent";

export default function Account({ route, navigation }) {
    const { member } = route.params

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                // title: "Member View",
            });
        }, [navigation])
    );
    3
    return (
        <SafeAreaView style={styles.container}>
            {CardComponent('First Name', member.first_name)}

            {CardComponent('Last Name', member.last_name)}

            {CardComponent('Primary Livelihood', member.livelihood)}

            {CardComponent('Email', member.email)}

            {CardComponent('Telephone', member.telephone_number)}

            <View style={[styles.groupPressable]}>
                <MapView style={styles.map}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: "#f5f6fa",
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    item: {
        width: '50%'
    },
    title: {
        fontSize: 18,
        marginTop: 0,
        width: "100%",
    },
    rectangleIcon: {
        position: "absolute",
        top: -12,
        left: -8,
        borderRadius: 15,
        width: 344,
        height: 104,
    },
    groupName: {
        position: "absolute",
        top: 10,
        left: 57,
        fontSize: 14,
        letterSpacing: 0.15,
        lineHeight: 24,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#000",
        textAlign: "left",
        width: 263,
        height: 49,
    },
    groupName2: {
        position: "absolute",
        top: 30,
        left: 57,
        fontSize: 20,
        letterSpacing: 0.15,
        lineHeight: 24,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#000",
        textAlign: "left",
        width: 263,
        height: 49,
    },
    groupIcon: {
        position: "absolute",
        top: 25,
        left: 12,
        width: 24,
        height: 24,
        overflow: "hidden",
    },
    groupPressable: {
        position: "relative",
        width: 328,
        height: 80,
        paddingTop: 100,
    },
    projectDetailsText: {
        position: "absolute",
        top: 121,
        left: 15,
        fontSize: 20,
        letterSpacing: 0.15,
        lineHeight: 24,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#000",
        textAlign: "left",
        width: 336,
        height: 50,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})
