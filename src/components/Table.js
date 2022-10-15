import { useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from '../config/tableConfig'

const Table = ( {tableData} ) => {

    // Memoization
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => tableData, []) 

    // Calling the useTable hook
    const {
        getTableProps, getTableBodyProps, 
        headerGroups, rows, prepareRow 
    } = useTable({
        columns: columns,
        data: data
    })

    return (
        <table { ...getTableProps() }>

            {/* Head section */}
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>

            {/* Body section */}
            <tbody { ...getTableBodyProps() }>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>   
                                    ))
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}

export default Table