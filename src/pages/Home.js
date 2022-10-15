// Libraries imports
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// User defined imports
import { getStocks } from '../utils/utils'


// Home component
const Home = () => {

  const [ stocks, setStocks ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  useEffect( () => {
    getStocks( setStocks, setLoading )
  }, [])

  // Loading . . .
  if( loading ) {
    return <h1>Loading . . .</h1>
  }

  return (
    <div>
        <Helmet>
            <title>All Stocks</title>
            <meta name='description' 
                content='Here is the list of all the stocks available via Sensibull'/>
        </Helmet>

        {/* TODO */}
        <h1>Shows Various stocks</h1>
        <ul>
          {
            stocks.map(
              stock => 
              <li key={stock.Symbol}>
                <Link to={`/${stock.Symbol}`} state={{...stock}}>
                  {stock.Symbol}
                </Link> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{stock.Name}</span> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{stock.Sector}</span>
              </li>)
          }
        </ul>
    </div>
  )
}

export default Home