import './App.css';
import { useState, useEffect } from 'react';
import { Card, Input , Image  } from 'semantic-ui-react'
import Ico from './components/Ico';



function App() {

  // estados para la busqueda , el icono y el valor
  const [ search , setSearch ] = useState('roma');
  const [ icon, setIcon ] = useState('');
  const [ value , setValue] = useState('');


// funcion getData para buscar datos de la api
  const URL =`https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=en&units=metric&appid=3d7b683a89edb0c24fd7cd7102449ccc` 
  const getData = async() => {

      await fetch (URL)
      .then ( Response => Response.json())
      .then ( data =>  {
        if(data.cod >=400){
          setValue(false)
        }else{
          console.log(data.weather[0].main)
          setIcon(data.weather[0].main)
          setValue( data )
        }
        })
      .catch( err => {
        console.log(err)
      })
  }
    const handleSearch = (e) => {
      if( e.key ==='Enter'){
        console.log(e.target.value)
        setSearch(e.target.value) 
      e.target.value = ''
      }
    }
// useEffect ejecutara la funcion getData cuando existan cambios en el estado
useEffect(() => {
  getData();
}, [search]) 

;



  return (
    <div className="App">
    <div className='card'>
    <Card style={{ padding:"0.8rem", boxSizing:'borderbox'}}>

    <Input style={{ width:"100%", margin:'1rem',height:'2.5rem' }}
          placeholder='search' 
          onKeyDown={handleSearch}
          type='text'
          autoFocus
          ></Input>

          { value ? (
            <Card.Content>
      {/* Ciudad */}
    <Card.Header>
    { (value)? (
      <h2>{value.name}</h2>
    ):  <h2>City</h2> 
    }
    </Card.Header>
        {/*  pais*/}
    <Card.Meta>
    { (value)? (
      <h4>{value.sys.country}</h4>
    ):  <h4>Country</h4> 
    }
    </Card.Meta>
    {/*  temperatura ahora */}
    <p> {value.main.temp.toFixed(0)}&deg;</p>
  

    {/* icono del clima  */}
    <Card.Meta className='flex'>
      <img alt='weather-img' src={Ico(icon)} />
        {value.weather[0].description} 
    </Card.Meta>






    <Card.Description>
    <p> 
      {`Hum ${value.main.humidity}%`}
    </p>
    </Card.Description>  
    </Card.Content>



          ) : ( <h1>{"City not found"}</h1>)}

      @climax all rights reserved
    </Card>
    </div>
    </div>
  );
}

export default App;
