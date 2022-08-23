import React from 'react';
import Cards from './Components/Cards'
import './App.css'
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (  
     <div className='App'>
      <Cards />
     

  <Router>  
  <Switch>
    <Route path="/perfil">
      <MyPerfil />
    </Route>

  </Switch>
  </Router> 
  </div>   
  );
}

function MyPerfil() {
  return <h2>My Perfil</h2>;
}

export default App;
