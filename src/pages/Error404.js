// Libraries imports
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Error404 = () => {
  return (
    <main>
        <Helmet>
            <title>Error 404</title>
            <meta name='description' content='Nothing is on this page'/>
        </Helmet>
        <h1>Sorry nothing to see here</h1>
        <Link to="/">Go Home 🏠</Link>
    </main>
  )
}

export default Error404