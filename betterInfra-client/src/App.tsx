import PageRouter from "./PageRouter";
import { URL } from "../api/api-config";

//TODO: remove this once the api is properly connected
console.log(
  `Api running on: ${process.env.NODE_ENV}\nConnecting to api: ${URL}`
);
function App() {
  return (
    <div className="App">
      <PageRouter />
    </div>
  );
}

export default App;
