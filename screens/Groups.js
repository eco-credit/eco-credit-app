import {authenticatedRequest} from "../network/requests";
import {GROUPS_URL} from "../network/endpoints";
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LoadingComponent from "../components/LoadingComponent";
import {useEffect, useState} from 'react';

const goToGroupScreen = function (navigation, group) {
    navigation.push('Group',
        {
            group
        })
}

const Item = ({navigation, group }) => (
    <View style={styles.item}>
        <TouchableOpacity onPress={() => goToGroupScreen(navigation, group)}>
            <Text style={styles.title}>{group.name}</Text>
        </TouchableOpacity>
    </View>
);

export default function Groups({ navigation }) {
    const [groups, setGroups] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const renderItem = ({ item }) => (
        <Item
            group={item}
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

        // Transactions.createOrUpdateMultiple('groups', groups)
    })

    const onRefresh = async () => {
        setRefreshing(true)
        void await fetchGroups()
        setRefreshing(false);
    };

    useEffect(() => {
        void fetchGroups();

    }, [])

    if (groups.length > 0) {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={groups}
                    renderItem={renderItem}
                    //  keyExtractor={(Math.random() + 1).toString(36).substring(7)}
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            </SafeAreaView>
        )
    }
    return <LoadingComponent />
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
