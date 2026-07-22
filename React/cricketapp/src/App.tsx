import "./App.css";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const flag = true;

  return (
    <div className="app">
      <h1>Cricket Players 🏏</h1>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;