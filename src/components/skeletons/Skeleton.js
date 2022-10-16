/** 
 * Skeleton Component 
 */ 

 import React from 'react'

// 
const Skeleton = ({ type }) => {
   
    const classes = `skeleton ${type}`
 
    return (
        <div className={classes}>
        </div>
    )
}
 
export default Skeleton