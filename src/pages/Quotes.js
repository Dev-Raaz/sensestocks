// Libraries imports
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

// User defined imports
import { getQuotes, setTimer } from '../utils/utils'


const QuoteCard = ({ price, time, valid_till, index}) => {

  console.log("Re-rendered . . .")

  const [ seconds, setSeconds ] = useState(0)
  
  useEffect(() => {
    
    setTimer(time, valid_till, setSeconds)
  }, [time, valid_till, setSeconds])

  return (
    <div className='quote-card'>
      <h3>Quote { index + 1 }</h3>
      <p className='price'>₹&nbsp;{price.toFixed(2)}</p>

      <p>
        <img src='/res/icons/started.svg' alt='Started'/> 
        <span>Opened: &nbsp;{time}</span>
      </p>

      <p>
        <img src='/res/icons/expires.svg' alt='Ending'/> 
        <span>Expires in: <span className='prm'>&nbsp;{seconds}s</span></span>
      </p>
    </div>
  )
}


// Quotes component
const Quotes = () => {

  const [ loading, setLoading ] = useState(true)
  const [ quotes, setQuotes ] = useState(null)
  const [ sortOrder, setSortOrder ] = useState('asc')

  // Hooks call
  const location = useLocation()
  const { Name, Symbol } = location.state

  // Use Effect
  useEffect(()=> {
    getQuotes(Symbol, setQuotes, setLoading)
  
    }, [Symbol])
  
  

  // Sort function
  const sort = (e) => {
    setSortOrder(e.target.value)
  }

  // Loading
  if( loading ) {
    return <main><h1>Loading . . .</h1></main>
  }
  
  // Sorting quotes in ascending order
  quotes.sort((a,b) => {
    return (new Date(a.time) - new Date(b.time))
  })

  let ascList = []
  quotes.map((quote, index) => 
    ascList.push(<QuoteCard key={index} {...quote} index={index}/>))
  
  let dscList = []
  for (let i = ascList.length; i >= 0; i--) {
    dscList.push(ascList[i])
  }

  // Returning the component
  return (
    <main>
        <Helmet>
            <title>{Name}</title>
            <meta name='description' 
            content={`Here are the quotes for ${Name}`}/>
        </Helmet>

        {/* TODO */}
        <h1>Quotes for <span className='prm'>{Name}</span> ({Symbol})</h1>
        <div className='quotes-grid'>
        
          <div className='quote-card sort'>
            <h3>Sort</h3>
            <p>
              <input 
                type='radio' name='sortOrder' 
                value='asc' checked={sortOrder === 'asc'}
                onChange={sort}  
              />
              <span>Ascending</span>
            </p> 
            <p>
              <input 
                type='radio' name='sortOrder' 
                value='dsc' checked={sortOrder === 'dsc'}
                onChange={sort}
              />
              <span>Desending</span>
            </p>  
          </div>
          
          {
            sortOrder === 'asc'
            ? ascList
            : dscList
          }
        </div>
    </main>
  )
}

export default Quotes