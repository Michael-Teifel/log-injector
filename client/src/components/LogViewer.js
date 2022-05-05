import React from 'react'
import { JSONTree } from 'react-json-tree';


export default function(props) {
  const stringifiedValue = JSON.stringify(props.value);
  return (
    <div >
      <p className='font-bold'>{props.name}</p>
      {/* <p className='break-all'>{stringifiedValue}</p> */}
      <JSONTree data={props.value} />
    </div>
  )
        
}