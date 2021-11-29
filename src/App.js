import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Main';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home message="To-Do App" />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <h1>Not Found</h1>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
