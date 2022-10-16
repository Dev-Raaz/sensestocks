// Library imports
import React from 'react'
import { Helmet } from 'react-helmet'

// User defined imports
import Skeleton from './Skeleton'
import Shimmer from './Shimmer'


const QuoteCardSkeleton = () => {
    return (
        <div className='quote-card'>
          <h3 style={{position: 'relative'}}>
            <Skeleton type='title'/>
            <Shimmer/>
          </h3>
          
          <p style={{position: 'relative'}}>
            <Skeleton type='text'/>
            <Shimmer/>
          </p>
    
          <p style={{position: 'relative'}}>
            <Skeleton type='text'/>
            <Shimmer/>
          </p>
    
          <p style={{position: 'relative'}}>
            <Skeleton type='text'/>
            <Shimmer/>
          </p>
        </div>
      )
}

const QuotesSkeleton = ({Name, Symbol}) => {
  
  return (
    <main className='quotes-skeleton'>
        <Helmet>
            <title>{Name}</title>
            <meta name='description' 
            content={`Here are the quotes for ${Name}`}/>
        </Helmet>

        {/* TODO */}
        <h1>Quotes for <span className='prm'>{Name}</span> ({Symbol})</h1>
        <div className='quotes-grid'>
          {
           [1,2,3,4,5,6].map(val => <QuoteCardSkeleton key={val}/>) 
          }
        </div>
    </main>
  )
}


export default QuotesSkeleton