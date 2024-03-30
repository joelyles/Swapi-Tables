import React from 'react'
import Row from './Row';

const Table = ({ items }) => {
  return (
    <div>
      
      <table>
        
        <tbody>
          {Object.entries(items).map((item, index) => {
            return (
            <Row key={index} item={item} />
            )
          })}
        </tbody>
      
      </table>
        
    </div>
  )
}

export default Table
