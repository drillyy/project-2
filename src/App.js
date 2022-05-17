import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const places = data.map((place, index) => {
    return <Card key={index} place={place} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section>{places}</section>
    </div>
  );
}

export default App;
