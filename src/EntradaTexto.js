import React, {useState} from 'react';

function EntradaTexto() {
  const [numCaracteres, setNumCaracteres] = useState(0);

  const OnChangeContarCaracteres = event => {
    setNumCaracteres(event.target.value.length);
  };

  return(
    <center>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="digite o texto aqui" onChange={ OnChangeContarCaracteres } ></input>
      <p align="center">O texto digitado possui {numCaracteres} caracteres </p>
    </center>
  );     
}
      
export default EntradaTexto;