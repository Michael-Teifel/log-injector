import React, { useState, useEffect } from 'react'
import LogItem from './LogItem'
import LogViewer from './LogViewer'

export default function(props) {
  const [logItems, setLogItems] = useState([])
  const [selectedItem, setSelectedItem ] = useState({})

  useEffect(() => {
    fetch('http://localhost:8000/log-items')
      .then(response => response.json())
      .then(data => {
        setLogItems(data)
        setSelectedItem(data[0])
      })
      .catch(err => console.log(err))
  }, [])

  function deleteItem(id) {
    fetch(`http://localhost:8000/log_item/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        if(data.status === 'success') {
          fetch('http://localhost:8000/log-items')
            .then(response => response.json())
            .then(data => {
              setLogItems(data)
            })
            .catch(err => console.log(err))
        }
      })
  }
  
  const logItemElements = logItems.map(item => {
    const handleClick = () => setSelectedItem(item);
    let isSelected = false;
    if(item._id === selectedItem._id) isSelected = true;
    return (
      <LogItem 
        key={item._id}
        id={item._id}
        name={item.name} 
        value={item.value} 
        createdAt={item._created_at}
        isSelected={isSelected}  
        handleClick={handleClick} 
        deleteItem={deleteItem} />)
  })

  return (
    <div className='flex pt-5 max-h-full' >
      <div className='log-items pr-4 w-max  max-h-full overflow-scroll'>{logItemElements}</div>
      <div id='view' className='grow w-full overflow-scroll pr-5 pl-3'>
        <LogViewer name={selectedItem.name} value={selectedItem.value} />
      </div>
    </div>
  )
}