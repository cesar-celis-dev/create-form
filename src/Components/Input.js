import React from 'react';
import { Radio } from './Radio';
import { Select } from './Select';
import { Text } from './Text';


export const Input = (props) => {

  const inputComponent = {
    text: <Text {...props} />,
    select: <Select {...props} />,
    radio: <Radio {...props} />
  }

  return (<>
    {inputComponent[props.type]}
  </>)
}
