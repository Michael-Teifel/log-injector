import React, { useState, useEffect } from 'react'
import LogItem from './LogItem'

export default function(props) {
  const [logItems, setLogItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/log-items')
      .then(response => response.json())
      .then(data => setLogItems(data))
      .catch(err => console.log(err))
  }, [])
  
  const logItemElements = logItems.map(item => {
    return <LogItem key={item._id} name={item.name} value={item.value} createdAt={item._created_at} />
  })

  return <div className='log-items'>{logItemElements}</div>
}