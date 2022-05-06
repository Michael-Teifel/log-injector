import React from 'react'
import { JSONTree } from 'react-json-tree';

const theme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633',
};


export default function(props) {
  const stringifiedValue = JSON.stringify(props.value);
  return (
    <div >
      {/* <p className='font-bold'>{props.name}</p> */}
      {/* <p className='break-all'>{stringifiedValue}</p> */}
      <JSONTree 
        data={props.value} 
        // getItemString={(type, data, itemType, itemString, keyPath) => {
        //   console.log(keyPath);
        //   console.log(type);
        //   console.log(itemType)
        //   // if(type === 'Array') itemType = ''
        //   return <span>{itemType} {itemString}</span>}
        // }
        labelRenderer={function([key], nodeType, expanded, expandable) {
          if(key === 'root') return <strong>{props.name}</strong>
          return key
        }}
        theme={theme} 
        invertTheme={true}/>
    </div>
  )
        
}