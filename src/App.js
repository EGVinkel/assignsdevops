import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Link, Route, Switch, withRouter} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {dogStore} from "./stores/DogStore";
import {observer} from "mobx-react";


function App() {

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Devops- get a dog day
          </p>
          <Link to={"/about/dogs"}>Look at About!</Link>
          <Switch>
            <Route path={"/about/:text"} component={About}/>
            <Route exact path={"/"} render={()=><h1>Startside</h1>}/>
            <Route render={()=><h2>noMatch - 404</h2>}/>
          </Switch>
          <ul>
            {dogStore.dogs.map((dogName,key)=>
                <li key={key}>{dogName}</li>
            )}
          </ul>
          <Button onClick={()=>dogStore.dogs.push("Sigurd")}>Add Dog</Button>
          <Button onClick={()=>dogStore.dogs.pop()}>Remove Dog</Button>
        </header>
      </div>
  );
}

const About = withRouter(({history,match})=>{
  console.log(history);
  console.log(match);
  return <div><h1>About {match.params.text}</h1>
    <Button onClick={()=>history.push("/")}>Go to front</Button>
  </div>
});


export default observer(App);