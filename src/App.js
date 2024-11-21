import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowList from "./pages/showList";
import Update from "./pages/update";
import Detail from "./pages/detail";
import Create from "./pages/create";

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>No page!!</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList/>} />
        <Route path="/list" element={<ShowList/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/update" element={<Update/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
