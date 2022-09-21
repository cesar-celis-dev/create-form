import { useState } from "react";
import { Input } from "./Components/Input";
const short = require('short-uuid');

function App() {

  const [fields, setFields] = useState([]);

  const [nameTextValue, setNameTextValue] = useState('');
  const [nameSelect, setNameSelect] = useState('');
  const [selectOptions, setSelectOptions] = useState('');

  const [nameRadio, setNameRadio] = useState('');
  const [radioOptions, setRadioOptions] = useState('');

  const handleDelete = (e) => {
    const newFields = fields.filter((event) => e !== event.name);
    setFields(newFields);
}

  const handleCreateInputText = (e) => {
    setFields([...fields, <Input handleDelete={handleDelete} type="text" name={nameTextValue} key={short.generate()} />])
    setNameTextValue('');
  }

  const handleCreateSelect = (e) => {
    const values = selectOptions.trim().split(',');
    setFields([...fields, <Input handleDelete={handleDelete} type="select" name={nameSelect} key={short.generate()} properties={values} />])
    setSelectOptions('');
  }

  const handleCreateRadio = (e) => {
    const values = radioOptions.trim().split(',');
    setFields([...fields, <Input handleDelete={handleDelete} type="radio" name={nameRadio} key={short.generate()} properties={values} />])
    setRadioOptions('');
  }


  return (
    <div className="principal">
      <div  className="divall">

        <h2>Create Input Text</h2>
        name: <input className="inputhead" type="text" value={nameTextValue} onChange={(e) => setNameTextValue(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { handleCreateInputText() } }} />
        <button onClick={handleCreateInputText}>Create Input Text</button>
        <hr />

        <h2>Create Input Select</h2>
        name: <input className="inputhead"  type="text" value={nameSelect} onChange={(e) => setNameSelect(e.target.value)} />
        <br />
        <label>Por favor, ingrese una lista de opciones separadas por comas: </label>
        <input className="inputhead" type="text" value={selectOptions} onChange={(e) => setSelectOptions(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { handleCreateSelect() } }} />
        <button onClick={handleCreateSelect}>Create Select</button>
        <hr />

        <h2>Create Input Radio Options</h2>
        name: <input className="inputhead"  type="text" value={nameRadio} onChange={(e) => setNameRadio(e.target.value)} />
        <br />
        <label>Por favor, ingrese una lista de opciones separadas por comas: </label>
        <input className="inputhead"  type="text" value={radioOptions} onChange={(e) => setRadioOptions(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { handleCreateRadio() } }} />
        <button onClick={handleCreateRadio}>Create Select</button>
        <hr />
      </div>

      <div className="preview">  
        <h2>Preview</h2>
        {fields.length ? fields : '  '}
      </div>
    </div>
  );
}

export default App;
