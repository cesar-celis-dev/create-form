import React from 'react';
const short = require('short-uuid');


export const Select = ({label, name, properties}) => {
  return (
    <div>
      <label className='name'>{label || name}: </label>
      <br />
      <select name={name}>
        {properties.map((property, i) => {
          if (property.trim().length) {
            return <option key={short.generate()} value={property}>{property}</option>
          }
        })}
      </select>
      <br />
    </div>
  )
}
