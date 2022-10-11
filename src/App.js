import Home from "./components/Home";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Update from "./components/Update";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Form />}></Route>
          <Route path="/edit/:id" element={<Update />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
