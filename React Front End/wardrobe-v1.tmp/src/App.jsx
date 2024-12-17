import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Layout from './components/Layout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';


const App =() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
