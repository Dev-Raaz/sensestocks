// Libraries Imports
import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

const Quotes = () => {

  const location = useLocation()
  const { Name, Symbol } = location.state
  console.log(location.state)

  return (
    <div>
        <Helmet>
            <title>{Name}</title>
            <meta name='description' 
            content={`Here are the quotes for ${Name}`}/>
        </Helmet>

        {/* TODO */}
        <h1>Showing quotes for {Name} ({Symbol})</h1>
    </div>
  )
}

export default Quotes