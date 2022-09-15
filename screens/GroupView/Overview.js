import * as React from "react";
import {StyleSheet, Text, View} from 'react-native';

const GridItem = ({ title, value }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{value}</Text>
        <Text>{""}</Text>
    </View>
);

export default function Overview({ route, navigation }) {
    const group = route.params
    console.log(group)
    return (
        <View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <GridItem title={'Area'} value={'0.00'} />
                <GridItem title={'Target Sector'} value={''} />
                <GridItem title={'Basis of funding'} value={''} />
                <GridItem title={'Project manager name'} value={
                    group.project_manager.first_name
                    + ' ' +
                    group.project_manager.last_name
                } />
                <GridItem title={'Project Manager Email'} value={group.project_manager.email} />
            </View>
            <Text style={ styles.title }>{'Milestones'}</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {group.milestones.map((milestone, key) => {
                    return (
                        <View>
                            <Text>Requirement: { milestone.requirement }</Text>
                            <Text>Timing: { milestone.time }</Text>
                            <Text></Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
    }
});