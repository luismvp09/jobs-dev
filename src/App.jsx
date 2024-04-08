import "./App.css";
import Header from "./components/Header";
import { MyRoutes } from "./routers/routes";

function App() {
  return (
    <div>
      <Header />
      <MyRoutes />
    </div>
  );
}

export default App;
