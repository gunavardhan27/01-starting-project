import {calculateInvestmentResults} from '../util/investment'
import { formatter } from '../util/investment';
export default function Results({input}){
    const result = calculateInvestmentResults(input)
    const investment = result[0].valueEndOfYear-result[0].interest-result[0].annualInvestment;
        console.log(Results)
    return (
        
        <div>
           <table>
            <thead>
                <th>Year</th>
                <th>invested val</th>
                <th>interest</th>
                <th>capital</th>
            </thead>
            <tbody>
                {result.map((i)=>{
                    const capital = i.valueEndOfYear - (i.annualInvestment*i.year)
                return (
                <tr key={i.year}>
                    <td>{i.year}</td>
                    <td>{formatter.format(i.valueEndOfYear)}</td>
                    <td>{formatter.format(i.interest)}</td>
                    <td>{formatter.format(capital-investment)}</td>
                </tr>
                )}
                )}
            </tbody>
           </table>
        </div>
    )
}