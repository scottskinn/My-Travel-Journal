
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import data from "./data.js"

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <NavBar />
      {cards}
    </div>
  );
}

export default App;
