export default function ReportTable(props){
return (
    <table>
        <thead>
            <tr>
            <th className="p-3 border border-gray-70 bg-green-600">Locations</th>
                    {props.hours.map(hour => (
                    <th className="p-3 border border-gray-70 bg-green-600">{hour}</th>
                     ))}
            <th className="p-3 border border-gray-70 bg-green-600">Total</th>
            </tr>
        </thead>
        <tbody>
                {props.cookiesInformations.map(cookiesInformation => (
                    <tr key={`${cookiesInformation.id}`}>
                    <td className="p-3 pl-2 border bg-green-500">{cookiesInformation.location}</td>
                    {cookiesInformation.hour_sales.map(hour => (
                         <td className="p-3 pl-2 border bg-green-500">{hour}</td>
                ))
                    }
                     <td className="p-3 pl-2 border bg-green-500">750</td>
                  </tr>))
                }
        </tbody>
    </table>
)
}