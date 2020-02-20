import React, { useEffect, useState } from 'react';
import './App.css';

const  App = () => {
  const APP_ID = '03d8b546' ;
  const APP_KEY = '07f20bed69b8d8b7109d203ff19aebc8';
  const exampleReq = 'https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free';

  const [counter,setCounter] = useState(0);
  console.log("starting");

useEffect(() => {
  
},[]);

const getRecipes = async() =>{

}

  return (
    <div className="App">
     <form className="search-form">
       <input className="search-bar" type="text"/>
       <button  
       className="search-button" 
       type="submit">
         Search
       </button>
     </form>
     <h1 onClick={()=> setCounter(counter + 1) }>{counter}</h1>
    </div>
  );
}

export default App;
