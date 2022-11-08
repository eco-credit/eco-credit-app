import {Image, StyleSheet, Text, View} from "react-native";

const CardComponent2 = (props) => {
    let { title, value, title2, value2, title3, value3, title4, value4, image } = props

    return (
        <View style={[styles.rectangle,  styles.shadowProp]} >
            <Text style={styles.groupName}>
                {image &&
                    <Image
                        style={styles.groupIcon}
                        resizeMode="cover"
                        source={image}
                    />
                }
                {title}
            </Text>
            {value &&
                <Text style={styles.groupName2}>
                    {value}
                </Text>
            }
            {title2 &&
                <Text style={styles.groupName}>
                    {title2}
                </Text>
            }
            {value2 &&
                <Text style={styles.groupName2}>
                    {value2}
                </Text>
            }

            {title3 &&
                <Text style={styles.groupName}>
                    {title3}
                </Text>
            }
            {value3 &&
                <Text style={styles.groupName2}>
                    {value3}
                </Text>
            }

            {title4 &&
                <Text style={styles.groupName}>
                    {title4}
                </Text>
            }
            {value4 &&
                <Text style={styles.groupName2}>
                    {value4}
                </Text>
            }
        </View>
    )

}

const styles = StyleSheet.create({
    rectangle: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    groupName: {
        fontSize: 14,
        letterSpacing: 0.15,
        lineHeight: 24,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#000",
        textAlign: "left",
        width: 263,
        marginLeft: 20,
        marginBottom: 10,
    },
    groupName2: {
        fontSize: 20,
        letterSpacing: 0.15,
        lineHeight: 24,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#000",
        textAlign: "left",
        width: 263,
        marginLeft: 20,
        marginBottom: 10,
    },
    shadowProp: {
        elevation: 3,
        shadowColor: 'black',
    },
    groupIcon: {
        height: 25,
        width: 25,
    },
});

export default CardComponent2