import "./App.css";
import Users from "./components/users";
import shower from "./shower.png";
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import BlogPosts from "./components/blogposts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/blogposts" element={<BlogPosts/>}/>
      </Routes>
      </BrowserRouter>
    <div>
      <img width={50} height={50} src={shower} alt="shower"/>
      <h1>shower thoughts blog users</h1>
      <Users/>
    </div>
    </div>
  );
}

export default App;