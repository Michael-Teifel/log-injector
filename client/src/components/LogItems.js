import React, { useState, useEffect } from 'react'
import LogItem from './LogItem'

export default function(props) {
  // When the component has mounted, get an Array of LogItems from the API.
  const [logItems, setLogItems] = useState([])

  // Update the Components State to the list of Log Items
  useEffect(() => {
    fetch('http://localhost:8000/log-items')
      .then(response => response.json())
      .then(data => setLogItems(data))
      .catch(err => console.log(err))
  }, [])

  // Loop Over the logItems and make a Div for Each Item
  
  const logItemElements = logItems.map(item => {
    console.log('item ', item);
    return <LogItem key={item.id} name={item.name} value={item.value} />
  })

  console.log(Array.isArray(logItemElements));
  console.log('logItemElements: ', logItemElements);
  return <div className='log-items'>{logItemElements}</div>
}