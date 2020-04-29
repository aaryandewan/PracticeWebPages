import React, { useState, useEffect } from 'react';
import Recepie from "./Recepie";
import './App.css';

function App() {

const [value, fn] = useState(0)
const [recepies, setRecepies] = useState([]);
const [search, setSearch] = useState("")
const [query, setQuery] = useState("Salad")

  const getSearch = e => {
    e.preventDefault();
    ///////////////////////////////////////////////////////////////////
    setQuery(search);
  }


  useEffect(()=>{getRecepies()}, [query]);


  const APP_ID = 'd9c08149';
  const API_KEY = 'fb75dc554374df9035301401a2f99c5e';

  const example = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`


  const getRecepies = async () =>{
    const response = await fetch(example);
    const data = await response.json()
     setRecepies(data.hits);

  }
  const updateSearch = (event) =>{
    setSearch(event.target.value)
  }
  // fnn([1,2,3,4])
  
  console.log('rendering...', recepies);
  return (  
    <div className="App">
      <input type="text" value={search} onChange={updateSearch}/>
      <button onClick={getSearch}>Search</button>
      <div className = "recipies">
      {recepies.map(recepie => <Recepie 
      key = {recepie.recipe.label} 
      name={recepie.recipe.label} 
      calories={recepie.recipe.calories}
      image={recepie.recipe.image} 
      ingredients = {recepie.recipe.ingredients}
      />)}
      </div>
    </div>
  );
}

export default App;
