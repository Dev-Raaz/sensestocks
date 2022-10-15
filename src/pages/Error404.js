// Libraries Imports
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Error404 = () => {
  return (
    <div>
        <Helmet>
            <title>Error 404</title>
            <meta name='description' content='Nothing is on this page'/>
        </Helmet>
        <h1>Sorry nothing to see here</h1>
        <Link to="/">Go Home 🏠</Link>
    </div>
  )
}

export default Error404