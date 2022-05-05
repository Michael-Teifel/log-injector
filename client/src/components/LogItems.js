import React, { useState, useEffect } from 'react'
import LogItem from './LogItem'
import LogViewer from './LogViewer'

export default function(props) {
  const [logItems, setLogItems] = useState([])
  const [selectedItem, setSelectedItem ] = useState({})

  useEffect(() => {
    fetch('http://localhost:8000/log-items')
      .then(response => response.json())
      .then(data => setLogItems(data))
      .catch(err => console.log(err))
  }, [])
  
  const logItemElements = logItems.map(item => {
    const handleClick = () => setSelectedItem(item);
    return (
      <LogItem 
        key={item._id}
        name={item.name} 
        value={item.value} 
        createdAt={item._created_at}  
        handleClick={handleClick} />)
  })

  return (
    <div className='flex pt-5 max-h-full' >
      <div className='log-items pr-4 w-max  max-h-full overflow-scroll'>{logItemElements}</div>
      <div id='view' className='grow w-full overflow-scroll pr-5'>
        <LogViewer name={selectedItem.name} value={selectedItem.value} />
      </div>
    </div>
  )
}