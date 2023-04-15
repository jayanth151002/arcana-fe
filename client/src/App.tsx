import { Switch, Route, Redirect } from "wouter";
import './App.css';
import ChartsPage from "./pages/Charts";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={ChartsPage} />
        <Route path="/" component={ChartsPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
