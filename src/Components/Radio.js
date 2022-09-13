import React from 'react'
const short = require('short-uuid');

export const Radio = ({label, name, properties}) => {
  return (
    <div>
      <p>{name || label}</p>

      {properties.map((property, i) => {
        if (property.trim().length) {
          return <>
            <input type="radio" name={name} value={property} key={short.generate()}/>
            <label for={property} key={short.generate()}>{property}</label>
            <br />
          </>
        }
      })}
      <br />
    </div>
  )
}
