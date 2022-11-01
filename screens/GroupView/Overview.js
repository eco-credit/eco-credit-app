import {FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import TableComponent from "../../components/TableComponent"
import {useEffect} from "react"
import GroupComponent from "../../components/GroupComponent";


export default function Overview({ route, navigation }) {
    const group = route.params

    console.log(group)
    const ListHeader = () => {
        return (
            <View>
                <Text style={styles.projectDetailsText}>Project Details</Text>
            </View>
        )
    }

    const groupData = [
        {
            title: 'Area',
            value: 0
        },
        {
            title: 'Target Sector',
            value: 'Test'
        },
        {
            title: 'Basis of funding',
            value: 'Test'
        },
        {
            title: 'Project Manager Name',
            value: group.project_manager.first_name + ' ' + group.project_manager.last_name
        },
        {
            title: 'Project Manager Email',
            value: group.project_manager.email
        }
    ]

    const groupRecord = [
        {
            title: 'Date When Group Created',
            value: group.created_at
        },
    ]

    useEffect(() => {
        navigation.setOptions({
            title: 'Group Overview',
        });
    }, []);

    const renderItem = ({ item }) => (
        <View
            style={[styles.groupPressable]}
        >
            <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={require("../../assets/rectangle.png")}
            />
            <Text style={styles.groupName}>
                {item.title}
            </Text>
            <Text style={styles.groupName2}>
                {item.value}
            </Text>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                data={groupData}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
            <FlatList
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                data={groupRecord}
                renderItem={renderItem}
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
