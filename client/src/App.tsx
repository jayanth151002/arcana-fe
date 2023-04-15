import { Switch, Route, Redirect } from "wouter";
import './App.css';
import Charts from "./pages/Charts";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Charts} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
