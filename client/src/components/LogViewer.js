import React from 'react'

export default function(props) {
  const stringifiedValue = JSON.stringify(props.value);
  return (
    <div >
      <p className='font-bold'>{props.name}</p>
      <p className='break-all'>{stringifiedValue}</p>
    </div>
  )
        
}