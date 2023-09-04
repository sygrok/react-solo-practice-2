import classes from "./ResultsTable.module.css";

const formatter = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTable = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((x) => (
          <tr key={x.year}>
            <td>{x.year}</td>
            <td>{formatter.format(x.savingsEndOfYear)}</td>
            <td>{formatter.format(x.yearlyInterest)}</td>
            <td>
              {formatter.format(
                x.savingsEndOfYear -
                  props.initialInvestment -
                  x.yearlyContribution * x.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment + x.yearlyContribution * x.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
