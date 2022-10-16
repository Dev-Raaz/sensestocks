import React from 'react'

// User defined imports
import Skeleton from './Skeleton'
import Shimmer from './Shimmer'

// Basic Stat Skeleton
export const TableSkeleton = () => {
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
                        [0,1,2,3,4,5,6,7,8].map(row => (
                            <tr key={row}>
                                <td>  
                                  <p style={{position: 'relative'}}>
                                  <Skeleton type='text'/>
                                  <Shimmer/>
                                  </p>
                                </td>

                                <td>  
                                  <p style={{position: 'relative'}}>
                                  <Skeleton type='text'/>
                                  <Shimmer/>
                                  </p>
                                </td>

                                <td>  
                                  <p style={{position: 'relative'}}>
                                  <Skeleton type='text'/>
                                  <Shimmer/>
                                  </p>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
  )
}
