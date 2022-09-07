import * as React from 'react';
import {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {apiUrl} from "../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {authenticatedRequest} from "../network/requests";
import {GROUPS_URL} from "../network/endpoints";

const goToGroupScreen = function (navigation, title) {
    navigation.push('Dashboard',
        {
            title: title
        })
}

const Item = ({navigation, title }) => (
    <View style={styles.item}>
        <TouchableOpacity onPress={() => goToGroupScreen(navigation, title)}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    </View>
);

export default function Groups({ navigation }) {
    const [outputs, setOutputs] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const renderItem = ({ item }) => (
        <Item
            title={item.name}
            navigation={navigation}
        />
    )

    const fetchGroups = () => authenticatedRequest(
        GROUPS_URL,
        'GET'
    ).then((response) => response.json()).then(async (json) => {
        setOutputs(json.outputs)
    })

    const onRefresh = async () => {
        setRefreshing(true)
        void await fetchGroups()
        setRefreshing(false);
    };

    useEffect(() => {
        void fetchGroups();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={outputs}
                renderItem={renderItem}
                // keyExtractor={myKeyExtractor}
                 refreshing={refreshing}
                 onRefresh={onRefresh}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 16,
        paddingTop: 100,
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: '#ff0000',
    },
    separateHero: {
        height: '100vh'
    },
    header: {
        backgroundColor: 'red',
        width: '100vw',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    headerText: {
        color: '#fff',
        fontSize: 18
    },
    footer: {
        backgroundColor: 'white',
        width: '100vw',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0
    },
    footerText: {
        color: '#000',
        fontSize: 18
    }
});
