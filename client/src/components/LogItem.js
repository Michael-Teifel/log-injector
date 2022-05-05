import React from 'react';

export default function LogItem(props) {
  let previewValue = JSON.stringify(props.value);
  if(previewValue.length >= 40) {
    previewValue = previewValue.slice(0,37) + '...';
  }
  return (
    <div className='log-item my-3 border p-3 rounded hover:cursor-pointer' onClick={props.handleClick}>
      <p className='font-bold'>name: {props.name}</p>
      <p>logged_at: {props.createdAt}</p>
      <p>value: {previewValue}</p>
    </div>
  )
}