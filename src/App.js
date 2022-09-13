import { useState } from "react";
import { Input } from "./Components/Input";
const short = require('short-uuid');

function App() {

  const [fields, setFields] = useState([]);

  const [nameTextValue, setNameTextValue] = useState('')
  const [nameSelect, setNameSelect] = useState('')
  const [selectOptions, setSelectOptions] = useState('')

  const [nameRadio, setNameRadio] = useState('')
  const [radioOptions, setRadioOptions] = useState('')

  const handleCreateInputText = (e) => {
    setFields([...fields, <Input type="text" name={nameTextValue} key={short.generate()} />])
    setNameTextValue('');
  }

  const handleCreateSelect = (e) => {
    const values = selectOptions.trim().split(',');
    setFields([...fields, <Input type="select" name={nameSelect} key={short.generate()} properties={values} />])
    setSelectOptions('');
  }

  const handleCreateRadio = (e) => {
    const values = radioOptions.trim().split(',');
    setFields([...fields, <Input type="radio" name={nameRadio} key={short.generate()} properties={values} />])
    setRadioOptions('');
  }


  return (
    <div>
      <h2>Create Input Text</h2>
      name: <input type="text" value={nameTextValue} onChange={(e) => setNameTextValue(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { handleCreateInputText() } }} />
      <button onClick={handleCreateInputText}>Create Input Text</button>
      <hr />

      <h2>Create Input Select</h2>
      name: <input type="text" value={nameSelect} onChange={(e) => setNameSelect(e.target.value)} />
      <br />
      <label>Por favor, ingrese una lista de opciones separadas por comas: </label>
      <input type="text" value={selectOptions} onChange={(e) => setSelectOptions(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { handleCreateSelect() } }} />
      <button onClick={handleCreateSelect}>Create Select</button>
      <hr />

      <h2>Create Input Radio Options</h2>
      name: <input type="text" value={nameRadio} onChange={(e) => setNameRadio(e.target.value)} />
      <br />
      <label>Por favor, ingrese una lista de opciones separadas por comas: </label>
      <input type="text" value={radioOptions} onChange={(e) => setRadioOptions(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { handleCreateRadio() } }} />
      <button onClick={handleCreateRadio}>Create Select</button>
      <hr />

      <h2>Preview</h2>
      {fields.length ? fields : '  '}
    </div>
  );
}

export default App;
