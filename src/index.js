import React from 'react';
import ReactDOM from 'react-dom';
import { Characters } from './components/characters';
import { Header } from './components/header';
import { Movies } from './components/movies';
import { Movie } from './components/movie';
import { Planets } from './components/planets';
import { Species } from './components/species';
import { Starships } from './components/starships';
import { Vehicles } from './components/vehicles';
import './index.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './components/home';
import { StarWars } from './components/starWars';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component = { Content5 }/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
    const Content5 = () => (
      <div>
    <Header/>
    <div className="body">
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/star-wars" component={StarWars}/>
            <Route path="/planets" component={Planets}/>
            <Route path="/characters" component={Characters}/>
            <Route path="/species" component={Species}/>
            <Route path="/starships" component={Starships}/>
            <Route path="/characters" component={Characters}/>
            <Route path="/vehicles" component={Vehicles}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/movie/:id" component={Movie}/>
          </Switch>
        </Router>
      </div>
    </div>
    </div>
    )  


ReactDOM.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);