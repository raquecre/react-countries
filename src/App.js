import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import CountriesList from "./components/pages/CountriesList";
import CountryDetails from "./components/pages/CountryDetails";
function App() {

  return (
    <div className="App">
      <Navbar />
      <CountriesList />
    </div>);
}
export default App;
