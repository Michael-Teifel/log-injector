import React from 'react';

export default function LogItem(props) {
  return (
    <div className='log-item' >
      <p>logged_at: {props.createdAt}</p>
      <p>name: {props.name}</p>
      <p>value: {JSON.stringify(props.value)}</p>
    </div>
  )
}