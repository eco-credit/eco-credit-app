import * as React from "react"
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { useEffect } from "react"
import CardComponent2 from "../../components/CardComponent2"

export default function Overview({ route, navigation }) {
  const group = route.params

  const ListHeader = () => {
    return (
      <View>
        <Text style={styles.projectDetailsText}>Project Details</Text>
      </View>
    )
  }

  useEffect(() => {
    navigation.setOptions({
      title: "Group Overview",
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardComponent2 title={"Area"} value={"0"} />
        <CardComponent2 title={"Target Sector"} value={"Test"} />
        <CardComponent2 title={"Basis of funding"} value={"Test"} />
        <CardComponent2
          title={"Project Manager Name"}
          value={
            group?.project_manager?.first_name +
            " " +
            group?.project_manager?.last_name
          }
        />
        <CardComponent2
          title={"Project Manager Email"}
          value={group?.project_manager?.email}
        />
        <Text>Group Record</Text>
        <CardComponent2
          title={"Date when group created"}
          value={group?.created_at}
        />
        <CardComponent2
          title={"Number of outstanding loans"}
          value={"Not yet added"}
        />
        <CardComponent2
          title={"Value of outstanding loans"}
          value={"Not yet added"}
        />
        <CardComponent2
          title={"Total loans to group members"}
          value={
            group?.fund?.total_loans ? group?.fund.total_loans : "Not yet added"
          }
        />
        <CardComponent2
          title={"Total amount loaned"}
          value={
            group?.fund?.total_loan_value
              ? group?.fund?.total_loan_value
              : "Not yet added"
          }
        />
        <CardComponent2
          title={"Total form fees"}
          value={
            group?.fund?.total_form_fees
              ? group?.fund?.total_form_fees
              : "Not yet added"
          }
        />
        <CardComponent2
          title={"Total interest"}
          value={
            group?.fund?.total_interest
              ? group?.fund?.total_interest
              : "Not yet added"
          }
        />
        <CardComponent2 title={"Loans past term"} value={"Not yet added"} />
        <CardComponent2
          title={"% of loans paid late"}
          value={"Not yet added"}
        />
        <CardComponent2 title={"Average days late"} value={"Not yet added"} />
        <CardComponent2 title={"Longest days late"} value={"Not yet added"} />
        <CardComponent2
          title={"Total penalties paid"}
          value={
            group?.fund?.total_penalties
              ? group?.fund?.total_penalties
              : "Not yet added"
          }
        />
        <Text>Fund Details</Text>
        <CardComponent2
          title={"Registration fee"}
          value={
            group?.fund?.registration_fee
              ? group?.fund?.registration_fee
              : "Not yet added"
          }
        />
        <CardComponent2
          title={"Processing fee"}
          value={
            group?.fund?.processing_fee
              ? group?.fund?.processing_fee
              : "Not yet added"
          }
        />
        <CardComponent2
          title={"Administration fee"}
          value={
            group?.fund?.admin_fee ? group?.fund?.admin_fee : "Not yet added"
          }
        />
        <CardComponent2 title={"Monthly savings"} value={"0"} />
        <CardComponent2
          title={"Loan interest"}
          value={
            group?.fund?.loan_interest
              ? group?.fund?.loan_interest
              : "Not yet added"
          }
        />
        <CardComponent2
          title={"Maximum loan size"}
          value={
            group?.fund?.maximum_loan_size
              ? group?.fund?.maximum_loan_size
              : "Not yet added"
          }
        />
        <CardComponent2
          title={"Loan term"}
          value={
            group?.fund?.loan_term
              ? group?.fund?.loan_term + " Months"
              : "Not yet added"
          }
        />
        <CardComponent2
          title={"Loan security"}
          value={
            group?.fund?.loan_security
              ? group?.fund?.loan_security
              : "Not yet added"
          }
        />
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
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
