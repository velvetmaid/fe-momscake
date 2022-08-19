import "./App.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import "./style/landingPage.css";
import "./fonts/Ruthie-Regular.ttf";
//https://pandorcakes.com/
function App() {
  return (
    <>
      <div className="navInt">
        <NavBar />
        <Intro />
      </div>
    </>
  );
}

export default App;
