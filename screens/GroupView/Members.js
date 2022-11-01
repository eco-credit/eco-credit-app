import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MemberComponent from "../../components/MemberComponent";
import {useEffect} from "react";

export default function Members({ navigation, route, props }) {
    const { members } = route.params

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Group Members',
        });
    }, []);

    const renderItem = ({ item }) => (
        <MemberComponent
            member={item}
            navigation={navigation}
        />
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
