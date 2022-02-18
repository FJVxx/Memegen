import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';

function App() {

  const [Linea1, setLinea1] = useState('');
  const [Linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function (evento){
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function (evento){
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function (evento){
    setImagen(evento.target.value)
  }

  const onClickExportar = function (evento){

    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img  = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      
      <select onChange={onChangeImagen}>
        <option value="bruh">Bruh</option>
        <option value="chicken">Chicken Oreo </option>
        <option value="lesgo">Lesgo</option>
        <option value="lobster">Chilin lobster</option>
        <option value="shrimp">Da shrimpnails</option>
        <option value="homies">Ma homies</option>
      </select> <br/>

      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"/> 
      <br/>
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2"/> 
      <br/>
      <button onClick={onClickExportar} >Exportar</button>
    
      <div className="meme" id="meme">
        <span>{Linea1}</span><br/>
        <span>{Linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>
    </div>
  );
}

export default App;
