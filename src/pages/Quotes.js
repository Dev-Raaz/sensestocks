import React from 'react'
import { Helmet } from 'react-helmet'

const Quotes = () => {
  return (
    <div>
        <Helmet>
            <title>Stock_Name</title>
            <meta name='description' content='Here are the quotes for Stock_Name'/>
        </Helmet>

        {/* TODO */}
        <h1>Shows quotes for various stocks</h1>
    </div>
  )
}

export default Quotes