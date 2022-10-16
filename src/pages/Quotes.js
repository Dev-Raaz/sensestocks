// Libraries imports
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

// User defined imports
import { getQuotes } from '../utils/utils'


// Quotes component
const Quotes = () => {

  const [ loading, setLoading ] = useState(true)
  const [ quotes, setQuotes ] = useState(null)

  // Hooks call
  const location = useLocation()
  const { Name, Symbol } = location.state
  
  // Use Effect
  useEffect(()=> {
    getQuotes(Symbol, setQuotes, setLoading)
  }, [Symbol])

  // Loading
  if( loading ) {
    return <main><h1>Loading . . .</h1></main>
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
        <h1>Showing quotes for {Name} ({Symbol})</h1>
        {
          quotes.map(quote=> (<div key={quote.valid_till}>{quote.price}</div>))
        }
    </main>
  )
}

export default Quotes