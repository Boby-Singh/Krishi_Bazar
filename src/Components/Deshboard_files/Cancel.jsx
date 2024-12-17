import React from 'react'
import { Link } from 'react-router-dom'
import './Success.css'
const Cancel = () => {
  return (
    <div className='success_container'>
      <h2>
        Your Transaction Has been Failed, Please Try again.
      </h2>
        <Link to='/'>Go back</Link>
    </div>
  )
}

export default Cancel