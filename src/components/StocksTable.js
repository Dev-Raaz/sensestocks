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
        <Table>
            {/* Head starts here */}
            <TableHead sx={{width: '100%'}}>
                <TableRow>
                    <TableCell align='center'>
                        <p>Symbol</p>
                    </TableCell>
                    <TableCell align='center'>
                        <p>Name</p>
                    </TableCell>
                    <TableCell align='center'>
                        <p>Category</p>
                    </TableCell>
                </TableRow>
            </TableHead>

            {/* Body starts here */}
            <TableBody sx={{width: '100%'}}>
                {
                    tableData.map(row => (
                        <TableRow key={row.Symbol}>
                            <TableCell align='center'>
                                <Link to={`/${row.Symbol}`} state={row}>
                                    {row.Symbol}
                                </Link>
                            </TableCell>

                            <TableCell align='center'>
                                <p>{row.Name}</p>
                            </TableCell>

                            <TableCell align='center'>
                                <p>{row.Sector || "None"}</p>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
export default StocksTable