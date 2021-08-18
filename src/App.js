import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([])
  const [cart, setCart] = useState([])

  useEffect(()=> {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
      setCountries(data)
      console.log(data);
    })
  }, [])

  const handleAddToCountry = (name) => {
    const newCart = [...cart, name]
    setCart(newCart)
  }

  return (
    <div className="App">
      
      <h2>Country loaded:{countries.length}</h2>
      <Cart cart={cart} />
        {
          countries.map(country => <Country  country={country} handleAddToCountry={handleAddToCountry}/>)
        }
      
    </div>
  );
}

export default App;
