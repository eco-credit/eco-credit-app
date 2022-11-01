import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native'
import {useEffect} from "react"
import CardComponent from "../../components/CardComponent";

export default function Overview({ route, navigation }) {
    const group = route.params

    const ListHeader = () => {
        return (
            <View>
                <Text style={styles.projectDetailsText}>Project Details</Text>
            </View>
        )
    }

    useEffect(() => {
        navigation.setOptions({
            title: 'Group Overview',
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                { CardComponent('Area', '0') }
                { CardComponent('Target Sector', 'Test') }
                { CardComponent('Basis of funding', 'Test') }
                { CardComponent('Project Manager Name', group.project_manager.first_name + ' ' + group.project_manager.last_name) }
                { CardComponent('Project Manager Email', group.project_manager.email) }
                <Text>Group Record</Text>
                { CardComponent('Date when group created', group.created_at) }
                { CardComponent('Number of outstanding loans', '0') }
                { CardComponent('Value of outstanding loans', '0') }
                { CardComponent('Total loans to group members', '0') }
                { CardComponent('Total amount loaned', '0') }
                { CardComponent('Total form fees', '0') }
                { CardComponent('Total interest', '0') }
                { CardComponent('Loans past term', '0') }
                { CardComponent('% of loans paid late', '0') }
                { CardComponent('Average days late', '0') }
                { CardComponent('Longest days late', '0') }
                { CardComponent('Total penalties paid', '0') }
                <Text>Fund Details</Text>
                { CardComponent('Registration fee', '0') }
                { CardComponent('Processing fee', '0') }
                { CardComponent('Administration fee', '0') }
                { CardComponent('Monthly savings', '0') }
                { CardComponent('Loan interest', '0') }
                { CardComponent('Maximum loan size', '0') }
                { CardComponent('Loan term', '0') }
                { CardComponent('Grace period', '0') }
                { CardComponent('Loan security', 'None') }
            </ScrollView>
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
})
