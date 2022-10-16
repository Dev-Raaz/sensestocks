// Libraries imports
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import millify from 'millify'

// User defined imports
import { getQuotes } from '../utils/utils'

const QuoteCard = ({ price, time, valid_till, index }) => {
  return (
    <div className='quote-card'>
      <h3>Quote { index + 1 }</h3>
      <p className='price'>₹&nbsp;{price.toFixed(3)}</p>

      <p>
        <img src='/res/icons/started.svg' alt='Started'/> 
        <span>Opened: &nbsp;{time}</span>
      </p>

      <p>
        <img src='/res/icons/expires.svg' alt='Ending'/> 
        <span>Expires In:  &nbsp;{valid_till}</span>
      </p>
    </div>
  )
}

// Quotes component
const Quotes = () => {

  const [ loading, setLoading ] = useState(true)
  const [ quotes, setQuotes ] = useState(null)
  const [sortOrder, setSortOrder] = useState('asc')

  // Hooks call
  const location = useLocation()
  const { Name, Symbol } = location.state
  
  // Use Effect
  useEffect(()=> {
    getQuotes(Symbol, setQuotes, setLoading)
  }, [Symbol])

  const sort = (e) => {
    setSortOrder(e.target.value)
  }

  // Loading
  if( loading ) {
    return <main><h1>Loading . . .</h1></main>
  }

  // Sorting
  if(sortOrder === 'asc') {
    console.log(`Sortin Ascending . . .`)
    quotes.sort((a, b) => {
      return new Date(b.time) - new Date(a.time)
    })
  } else if (sortOrder === 'dsc') {
    console.log(`Sorting Descending . . .`)
    quotes.sort((a, b) => {
      return new Date(a.time) - new Date(b.time)
    })
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
          {
            quotes.map(
              (quote, index)=> (<QuoteCard key={index} {...quote} index={index}/>))
          }
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
        </div>
    </main>
  )
}

export default Quotes