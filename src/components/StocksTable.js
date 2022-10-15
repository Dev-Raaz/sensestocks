// Library imports
import { Link } from 'react-router-dom'
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow
} from '@mui/material'

// User defined imports
import { COLUMNS } from '../config/tableConfig'

const StocksTable = ({ tableData }) => {

    return (
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
    )
}
export default StocksTable