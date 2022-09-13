import React from 'react';
const short = require('short-uuid');


export const Text = ({label, name}) => {
  return (
    <div>
      <label className='name'>{label || name}:</label>
      <br />
      <input className='inputtxt' type="text" name={name} />
      <br />
    </div>
  )
}
