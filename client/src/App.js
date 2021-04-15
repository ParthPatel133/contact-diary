import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AlertState from "./context/alert/AlertState";
import Alerts from "./components/layout/Alerts";

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <div>
              <div>
                <Navbar />
                <div className="container">
                  <Alerts />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                  </Switch>
                </div>
              </div>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
