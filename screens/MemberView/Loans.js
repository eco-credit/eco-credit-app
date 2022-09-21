import TableComponent from "../../components/TableComponent";

export default function Loans({route, navigation}) {
    let {loans} = route.params

    loans = loans.map(function (loan) {
        return [
            loan.date,
            loan.debcred === "D" ? loan.amount : "",
            loan.debcred === "C" ? loan.amount : "",
            0
        ]
    })

    let data = {
        headers: ['Date', 'Loan/Fee', 'Repay', 'Balance'],
        body: loans,
        widthAttr: [100, 90, 90, 80]
    }

    return (
        <TableComponent data={data} />
    )
}
