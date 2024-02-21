import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="bg_papaya_orange">
        <NavBar />
        <Hero />
      </div>
    </>
  );
}

export default App;
