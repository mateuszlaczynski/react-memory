import Home from "./components/Home"
import Images from "./components/Images"
import './assets/css/style.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/play/:number" component={Images}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
