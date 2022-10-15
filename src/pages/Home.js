// Libraries imports
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// User defined imports
import Table from '../components/Table'
import { getStocks } from '../utils/utils'
import { ThemeContext } from '../context/ThemeContext'



// Home component
const Home = () => {

  const [ stocks, setStocks ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  // Hooks Call
  const { isNight } = useContext(ThemeContext)

  useEffect( () => {
    getStocks( setStocks, setLoading )
  }, [])

  // Loading . . .
  if( loading ) {
    return <main><h1>Loading . . .</h1></main>
  }

  return (
    <main className={'home ' + ( isNight ? 'dark' : '')}>
        <Helmet>
            <title>All Stocks</title>
            <meta name='description' 
                content='Here is the list of all the stocks available via Sensibull'/>
        </Helmet>

        {/* TODO */}
        <h1>
          <img src='/res/icons/sparkles.svg' alt='sparkles'/>
        Welcome To <span className='prm'>Sense Stocks</span>
        <img src='/res/icons/sparkles.svg' alt='sparkles'/>
        </h1>



        {/* <ul>
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
        </ul> */}

        <Table tableData={stocks}/>
    </main>
  )
}

export default Home