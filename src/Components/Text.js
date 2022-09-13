import React from 'react';
const short = require('short-uuid');


export const Text = ({label, name}) => {
  return (
    <div>
      <label>{label || name}:</label>
      <br />
      <input type="text" name={name} />
      <br />
    </div>
  )
}
