import React from 'react'
import Row from './Row';

const Table = ({ items }) => {
  return (
    <div>
      
      <table>
        
        <tbody>
          {Object.values(items.results).map((item, index) => {
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

// the above returns a grid, but with the error "Table.js:10 Uncaught TypeError: Cannot convert undefined or null to object"