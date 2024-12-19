import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import Actors from './components/Actors/Actors';
import NavBar from './components/NavBar/NavBar';

const App = () => {
    return (
        <div>
            <CssBaseline />
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Movies/>} />
                    <Route path='/actors/:id' element={<Actors/>} />

                </Routes>
            </BrowserRouter>             
        </div>
    );
};

export default App;