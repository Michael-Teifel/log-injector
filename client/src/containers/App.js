import React from 'react'
import LogItems from '../components/LogItems'

export default function App (props) {
  return (
    <div className='m-5 max-h-screen'>
      <h1 className='text-center text-4xl overflow-clip'>Log Injector</h1>
      <LogItems />
    </div>
  )
}