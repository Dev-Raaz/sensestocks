import React from 'react'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>All Stocks</title>
            <meta name='description' 
                content='Here is the list of all the stocks available via Sensibull'/>
        </Helmet>

        {/* TODO */}
        <h1>Shows Various stocks</h1>
    </div>
  )
}

export default Home