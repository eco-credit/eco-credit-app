import {FlatList, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useEffect} from "react";
import CardComponent2 from "../../components/CardComponent2";

export default function Members({ navigation, route, props }) {
    const { members } = route.params
    const { milestones } = route.params

    const goToMemberScreen = function (navigation, member, milestones) {
        navigation.push('Dashboard',
            {
                member,
                milestones
            })
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Group Members',
        });
    }, []);

    const renderItem = ({ item }) => (
        <Pressable
            onPress={() => goToMemberScreen(navigation, item, milestones)}
        >
            <CardComponent2 title={item.first_name + ' ' + item.last_name} image={require("../../assets/member.png")} />
        </Pressable>

    )
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                data={members}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
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
