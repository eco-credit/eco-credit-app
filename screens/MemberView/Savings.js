import TableComponent from "../../components/TableComponent";
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import CardComponent2 from "../../components/CardComponent2";

function parseDate(input) {
    const parts = input.match(/(\d+)/g);

    return new Date(parts[2], parts[1]-1, parts[0]);
}

export default function Savings({ route }) {
    let { savings } = route.params

    savings = savings.sort(function(a, b) {
        return new Date(parseDate(b.date)) - new Date(parseDate(a.date));
    }).map(function (saving, index) {
        let total = savings.length

        let balance = () => {
            let balance = 0;

            for (let i = total - 1; i >= index; i--) {
                if (saving.debcred === "C") {
                    balance += Number(savings[i].amount)
                    continue
                }

                balance -= Number(savings[i].amount)
            }

            return balance
        }

        return {
            date: saving.date,
            amount: saving.amount ?? "",
            type: saving.debcred === 'C' ? 'Deposit': 'Withdrawal',
            balance: balance.call()
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {savings.map((saving) => {
                    return (
                        <CardComponent2 title={'Date'} value={saving.date}  title2={'Transaction Type'} value2={saving.type} title3={'Amount'}  value3={saving.amount} title4={'Balance'} value4={saving.balance} />
                    )
                })}
            </ScrollView>
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
});