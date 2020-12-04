import React from 'react';
import ReactDOM from 'react-dom';
import { Characters } from './components/characters';
import { Header } from './components/header';
import { Planets } from './components/planets';
import { Species } from './components/species';
import { Starships } from './components/starships';
import './index.css';

const App = () => {
  return(
    <>
    <Header/>
    <Planets/>
    <Starships/>
    <Species/>
    <Characters/>
    </>
    
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);