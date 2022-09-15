import * as React from 'react';
import {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {authenticatedRequest} from "../network/requests";
import {GROUPS_URL} from "../network/endpoints";
import {Transactions} from "../database/transactions";

const goToGroupScreen = function (navigation, id) {
    navigation.push('GroupView',
        {
            id
        })
}

const Item = ({navigation, title, id }) => (
    <View style={styles.item}>
        <TouchableOpacity onPress={() => goToGroupScreen(navigation, id)}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    </View>
);

export default function Groups({ navigation }) {
    const [groups, setGroups] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const renderItem = ({ item }) => (
        <Item
            title={item.name}
            id={item.id}
            navigation={navigation}
        />
    )

    const fetchGroups = () => authenticatedRequest(
        GROUPS_URL,
        'GET'
    ).then((response) => response.json()).then(async (json) => {
        let groups = json.data
        console.log(groups)

        // Transactions.createDatabase()

        setGroups(groups)

        Transactions.createOrUpdateMultiple('groups', groups)
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
                data={groups}
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
