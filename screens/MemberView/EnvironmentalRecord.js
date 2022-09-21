import {useState} from "react"
import {Text, View, StyleSheet} from "react-native";
import DropDownComponent from "../../components/DropDownComponent";
import {appUrl} from "../../config/config";
import GridImageView from "react-native-grid-image-viewer";
import GridImageComponent from "../../components/GridImageComponent";

export default function EnvironmentalRecord({ route, navigation }) {
    const [selected, setSelected] = useState(undefined)

    const { milestones } = route.params

    const data = [
        { label: 'Milestone 1', value: '0' },
        { label: 'Milestone 2', value: '1' },
        { label: 'Milestone 3', value: '2' },
        { label: 'Milestone 4', value: '3' },
        { label: 'Milestone 5', value: '4' },
    ]

    const getImages = () => {
        return milestones[selected.value].milestone_files.map((file) => (
            appUrl + file.file)
        )
    };

    return (
        <View style={styles.container}>
            <DropDownComponent label="Select Item" data={data} onSelect={setSelected} />
            {!!selected && (
                <View>
                    <Text>
                        {milestones[selected.value].requirement}
                    </Text>
                    <Text>
                        {milestones[selected.value].time}
                    </Text>
                    <View>
                        <GridImageComponent
                            data={getImages()}
                        />
                    </View>

                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
});
