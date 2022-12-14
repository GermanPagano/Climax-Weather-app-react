import './App.css';
import { useState, useEffect } from 'react';

function App() {

  // estados para la busqueda , el icono y el valor
  const [ search , setSearch ] = useState('');
  const [ icon, setIcon ] = useState('');
  const [ value , setValue] = useState('');


  // useEffect ejecutara la funcion getData cuando existan cambios en el estado
  useEffect(() => {
    getData()
  }, [ ])


// funcion getData para buscar datos de la api
  const URL =' https://api.openweathermap.org/data/2.5/weather?q=roma&appid=3d7b683a89edb0c24fd7cd7102449ccc'
  const getData = async() => {
    console.log(' Enter the Api ')
      await fetch (URL)
      .then ( Response => Response.json())
      .then ( data =>  console.log(data.weather[0].main))
      .catch( err => {
        console.log(err)
      })
  }

  


  return (
    <div className="App">
      <header className="App-header">
        hola soy una app react

      </header>
      Climax by German pagano - All rights reserved
    </div>
  );
}

export default App;
