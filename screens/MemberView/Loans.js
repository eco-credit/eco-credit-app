import { SafeAreaView, ScrollView, StyleSheet } from "react-native"
import CardComponent2 from "../../components/CardComponent2"

function parseDate(input) {
  const parts = input.match(/(\d+)/g)

  return new Date(parts[2], parts[1] - 1, parts[0])
}

export default function Loans({ route, navigation }) {
  let { loans } = route.params

  loans = loans
    .sort(function (a, b) {
      return new Date(parseDate(b.date)) - new Date(parseDate(a.date))
    })
    .map(function (loan, index) {
      let total = loans.length
      let balance = () => {
        let balance = 0

        for (let i = total - 1; i >= index; i--) {
          if (loan.debcred === "C") {
            balance += Number(loans[i].amount)
            continue
          }

          balance -= Number(loans[i].amount)
        }
        return balance
      }
      return {
        date: loan.date,
        type: loan.type[0].toUpperCase() + loan.type.substring(1),
        amount: loan.amount,
        balance: balance.call(),
      }
    })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loans.map((loan) => {
          return (
            <CardComponent2
              title={"Date"}
              value={loan.date}
              title2={"Transaction Type"}
              value2={loan.type}
              title3={"Amount"}
              value3={loan.amount}
              title4={"Balance"}
              value4={loan.balance}
            />
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#f5f6fa",
  },
})
