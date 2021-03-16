import './App.css';
import {Switch, Route, Link} from "react-router-dom";
import Register from "./components/Register"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
