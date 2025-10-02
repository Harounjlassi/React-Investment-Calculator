import { calculateInvestmentResults , formatter} from "../util/investment.js";
export default function Results({ input }) {
  //console.log(input);
  const resultsData = calculateInvestmentResults(input);
  //console.log(resultsData);
  const InitialInvestment=resultsData[0].valueEndOfYear-resultsData[0].interest-resultsData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest (Year)</th>
          <th>Total Interest </th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInsert=yearData.valueEndOfYear-yearData.annualInvestment* yearData.year-InitialInvestment;
          const totalAmountInvested=yearData.valueEndOfYear-totalInsert;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInsert)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
           
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
