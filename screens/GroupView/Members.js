import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";

const goToMemberScreen = function (navigation, member, milestones) {
    navigation.push('Dashboard',
        {
            member,
            milestones
        })
}

const Item = ({navigation, member, milestones}) => (
    <View style={styles.item}>
        <TouchableOpacity onPress={() => goToMemberScreen(navigation, member, milestones)}>
            <Text style={styles.title}>{member.first_name + " " + member.last_name}</Text>
        </TouchableOpacity>
    </View>
)

export default function Members({ navigation, route }) {
    const { members, milestones } = route.params

    const renderItem = ({ item }) => (
        <Item
            navigation={navigation}
            member={item}
            milestones={milestones}
            id={item.id}
        />
    )
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={members}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                // refreshing={refreshing}
                // onRefresh={onRefresh}
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
