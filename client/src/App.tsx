import { Switch, Route, Redirect } from "wouter";
import './App.css';
import ChartsPage from "./pages/Charts";
import NewsPage from "./pages/News";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import GlobalModal from "./components/templates/GlobalModal";

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalModal />
        <Switch>
          <Route path="/" component={ChartsPage} />
          <Route path="/news" component={NewsPage} />
          <Redirect to="/" />
        </Switch>
      </QueryClientProvider>
    </>
  );
}

export default App;
