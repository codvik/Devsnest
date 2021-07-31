import logo from './logo.svg';
import './App.css';
import Cal from './components/Cal';
function App() {
  return (
    <>
    <div className="heading"><h1>Calories read Only</h1></div>
    <div className="container">
    <Cal name="Pizza" calo="You have consumed 69 cals today"/>
    <Cal name="Burger" calo="You have consumed 69 cals today"/>
    <Cal name="Coke" calo="You have consumed 69 cals today"/>
    <Cal name="Browne" calo="You have consumed 69 cals today"/>
    <Cal name="Fried Rice" calo="You have consumed 69 cals today"/>
    <Cal name="Lassania" calo="You have consumed 69 cals today"/>
    </div>
    </>
  );
}

export default App;