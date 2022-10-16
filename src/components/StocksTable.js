// Library imports
import { Link } from 'react-router-dom'

const StocksTable = ({ tableData }) => {

    return (
        <div className='table-wrapper'>
            <table className='stocks-table'>
                {/* Head starts here */}
                <thead sx={{width: '100%'}}>
                    <tr>
                        <th>
                            <p>Symbol</p>
                        </th>
                        <th>
                            <p>Name</p>
                        </th>
                        <th>
                            <p>Category</p>
                        </th>
                    </tr>
                </thead>

                {/* Body starts here */}
                <tbody>
                    {
                        tableData.map(row => (
                            <tr key={row.Symbol}>
                                <td>
                                    <Link to={`/${row.Symbol}`} state={row}>
                                        {row.Symbol}
                                    </Link>
                                </td>

                                <td>
                                    <p>{row.Name}</p>
                                </td>

                                <td>
                                    <p>{row.Sector || "None"}</p>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default StocksTable