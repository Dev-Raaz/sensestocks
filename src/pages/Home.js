// Libraries imports
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

// User defined imports
import StocksTable from '../components/StocksTable'
import { getStocks } from '../utils/utils'



// Home component
const Home = () => {

  const [ stocks, setStocks ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const [ searchOn, setSearchOn ] = useState(false)

  useEffect( () => {
    getStocks( setStocks, setLoading )
  }, [])

  // Loading . . .
  if( loading ) {
    return <main><h1>Loading . . .</h1></main>
  }

  return (
    <main className='home'>
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

        <div className={'search-bar' + (searchOn ? ' active' : '')}>
          <input
            onFocus={()=>setSearchOn(true)}
            onBlur={()=>setSearchOn(false)} 
            type='text' 
            placeholder='Search stocks here . . .'/>

          <svg xmlns="http://www.w3.org/2000/svg" width="31.994" height="32" viewBox="0 0 31.994 32">
            <path id="search" d="M26,13a12.966,12.966,0,0,1-2.5,7.668l7.911,7.918a2,2,0,1,1-2.831,2.831L20.666,23.5A13,13,0,1,1,26,13ZM13,22a9,9,0,1,0-9-9A9,9,0,0,0,13,22Z" fill="#2340ff"/>
          </svg>
        </div>

        <StocksTable tableData={stocks}/>
    </main>
  )
}

export default Home