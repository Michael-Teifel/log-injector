import React from 'react'
import LogItems from '../components/LogItems'

export default function App (props) {
  return (
    <div className='ml-5 mt-5'>
      <h1 className='text-center text-4xl'>Log Injector</h1>
      <LogItems />
    </div>
  )
}