import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('hello')

const getItems = async () => {
    const response = await fetch("http://localhost:8080/api/v1/items");

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

    const json = await response.json();

    console.log(json)

    // try {
    //     const response = await api.get('http://localhost:8080/api/v1/items');
    //     console.log("hello")
    //     console.log(response.data);
    //     setItems(response.data);
    // } catch (error) {
    //     console.log(error);
    // }
}

getItems()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
