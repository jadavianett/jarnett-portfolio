import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/Wrapper/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About';
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <div className="container">
          <NavBar />
          <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
