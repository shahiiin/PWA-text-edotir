import { useState } from "react";
import "./App.css";
import Details from "./components/Details";
import { Tiptap } from "./components/TipTap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Tiptap setDescription={setDescription} />
        <Details description={description} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
