import {ScrollView, StyleSheet, View} from "react-native";
import {Row, Table} from "react-native-table-component";

const TableComponent = ({data}) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#17a2b8'}}>
                        <Row data={data.headers} widthArr={data.widthAttr} style={styles.HeadStyle} textStyle={styles.TableText}/>
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{borderWidth: 1, borderColor: '#17a2b8'}}>
                            {
                                data.body.map((datum, index) => (
                                    <Row
                                        key={index}
                                        data={datum}
                                        widthArr={data.widthAttr}
                                        style={[styles.row, index%2 && {backgroundColor: '#ffffff'}]}
                                        textStyle={styles.TableText}
                                    />
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        paddingTop: 35,
        backgroundColor: '#ffffff'
    },
    HeadStyle: {
        height: 50,
        alignContent: "center",
        backgroundColor: '#007bff'
    },
    TableText: {
        margin: 10,
        textAlign: "center"
    },
    dataWrapper: {
        marginTop: -1
    },
    row: {
        // height: 40,
        backgroundColor: '#F7F8FA'
    }
});

export default TableComponent