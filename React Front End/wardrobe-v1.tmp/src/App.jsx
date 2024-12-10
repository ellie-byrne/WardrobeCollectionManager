import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

//   const wardrobejson = useState([]);
const [wardrobejson, setWardrobejson] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/items').then((response) => {
        setWardrobejson(response.data);
        console.log("data", response.data);
        getItems();
    })
    .catch(error => {
        console.log(error);
    })
}, []);

function App() {
    const [items, setItems] = useState([]);

    const getItems = async () => {
        const response = await fetch("http://localhost:8080/api/v1/items");
    }

    return (
        wardrobejson.map((e) => (
            <div>
                {e.item}
            </div>
        ))
    );
}}

export default App;
