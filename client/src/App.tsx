import { Switch, Route, Redirect } from "wouter";
import './App.css';
import ChartsPage from "./pages/Charts";
import NewsPage from "./pages/News";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={ChartsPage} />
        <Route path="/news" component={NewsPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
