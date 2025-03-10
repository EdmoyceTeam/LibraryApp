import { BrowserRouter, Route } from "react-router";
import "./App.css";
import Landing from "./pages/Landing";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import { Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="books" element={<Books />} />
        <Route path="/single-book" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
