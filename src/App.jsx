import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes";
import Navbar from "./components/Navbar";
function App() {
  const element = useRoutes(routes);
  return (
    <>
      <div>
        <Navbar />
        {element}
      </div>
    </>
  );
}

export default App;
