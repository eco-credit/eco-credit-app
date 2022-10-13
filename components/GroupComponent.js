import {Image, Pressable, StyleSheet, Text} from "react-native"

const goToGroupScreen = function (navigation, group) {
    navigation.push('Group',
        {
            group
        })
}

const GroupComponent = (props) => {
    let { group, navigation } = props

    return (
        <Pressable
            style={[styles.groupPressable]}
            onPress={() => goToGroupScreen(navigation, group)}
        >
            <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={require("../assets/rectangle.png")}
            />
            <Text style={styles.groupName}>{group.name}</Text>
            <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group_group.png")}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
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
        top: 27,
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
})

export default GroupComponent
