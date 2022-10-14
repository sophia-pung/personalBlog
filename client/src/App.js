import "./App.css";
import Users from "./components/users";
import shower from "./shower.png";


function App() {
  return (
    <div className="App">
    <div className="title">
      <img width={50} height={50} src={shower} alt="shower"/>
      <h1>shower thoughts blog users</h1>
    </div>
    <Users/>
    </div>
  );
}

export default App;