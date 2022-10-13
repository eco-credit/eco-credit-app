import TableComponent from "../../components/TableComponent";

function parseDate(input) {
    const parts = input.match(/(\d+)/g);

    return new Date(parts[2], parts[1]-1, parts[0]);
}

export default function Loans({route, navigation}) {
    let {loans} = route.params

    loans = loans.sort(function(a, b) {
        return new Date(parseDate(b.date)) - new Date(parseDate(a.date));
    }).map(function (loan, index) {
        let total = loans.length
        let balance = () => {
            let balance = 0;

            for (let i = total - 1; i >= index; i--) {
                if (loan.debcred === "C") {
                    balance += Number(loans[i].amount)
                    continue
                }

                balance -= Number(loans[i].amount)
            }
            return balance
        }
        return [
            loan.date,
            loan.debcred === "D" ? loan.amount : "",
            loan.debcred === "C" ? loan.amount : "",
            balance.call()
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
