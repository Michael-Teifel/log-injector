import React from 'react';

export default function LogItem(props) {
  let previewValue = JSON.stringify(props.value);
  if(previewValue.length >= 40) {
    previewValue = previewValue.slice(0,37) + '...';
  }
  const bgClass = props.isSelected ? 'bg-slate-300' : '';
  return (
    <div className={`log-item my-3 border p-3 rounded hover:cursor-pointer ${bgClass}`} onClick={props.handleClick}>
      <div className='flex justify-between'>
        <p className='font-bold'>name: {props.name}</p>
        <p className='' onClick={() => props.deleteItem(props.id)}>X</p>
      </div>
      <p>logged_at: {props.createdAt}</p>
      <p>value: {previewValue}</p>
    </div>
  )
}