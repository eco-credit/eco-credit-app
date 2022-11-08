import {StyleSheet, SafeAreaView, ScrollView, Pressable} from "react-native";
import CardComponent2 from "../../components/CardComponent2";


const goToMilestoneScreen = function (navigation, milestone) {
    navigation.push('Milestone',
        {
            milestone
        })
}

export default function EnvironmentalRecord({ route, navigation }) {
    const { milestones } = route.params

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {milestones.map((milestone) => {
                    return (
                        <Pressable
                            onPress={() => goToMilestoneScreen(navigation, milestone)}
                        >
                            <CardComponent2 title={'Requirement'} value={milestone.requirement} title2={'timing'} value2={ milestone.time} />
                        </Pressable>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        // backgroundColor: "#f5f6fa",
    },
});
