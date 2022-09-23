import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashbord from "./components/Dashboard/Dashbord";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashbord />
    </div>
  );
}

export default App;
