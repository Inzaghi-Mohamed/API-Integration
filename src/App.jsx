import React, { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import axios from 'axios';
import Movies from './component/Movies';
import { Container } from '@mui/material';

function App() {
  const [pokemons, setPokemon]= useState([]);
  const [search, setSearch] = useState('');
  // We fecth Movies from API
  const fetchMovie = ()=>{
    const BASE_URL = 'https://dummyapi.online/api/pokemon';
    axios.get(BASE_URL).
    then((response)=> {
      console.log(response.data);
      // push the data into Movies
     setPokemon(response.data)
    })
  }
  useEffect(()=>{
    fetchMovie()

  },[])


  return (
   <Container>
     <div>

<h3>Search For Pokemons</h3>
<input type="text"  placeholder='Search for Pokemons' value={search} onChange={(e)=>setSearch(e.target.value)}/>
<div>
<Movies pokemons={pokemons} search ={search}/>
</div>

</div>

   </Container>
  )
}

export default App