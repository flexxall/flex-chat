import { Routes, Route } from "react-router-dom";
import "./App.css";
import Chatpage from "./views/Chatpage";
import Homepage from "./views/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<Chatpage />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </div>
  );
}

export default App;
