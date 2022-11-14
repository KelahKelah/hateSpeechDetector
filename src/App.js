import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";
import Approute from './approute';

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Approute />
      </QueryClientProvider>

    </div>
  );
}

export default App;
