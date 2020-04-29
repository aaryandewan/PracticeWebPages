import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [recepies, setRecepies] = useState([]);

useEffect(()=>{getRecepies()}, []);

//const example = Some valid API URL


  const getRecepies = async () =>{
    const response = await fetch(example);
    const data = await response.json();

    //data.hits is an array of 10 objects
     setRecepies(data.hits);

     console.log(data.hits);
    // prints nothing

  }
  
  return (  
    <div className="App">
        
    </div>
  );
}

export default App;
