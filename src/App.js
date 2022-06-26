import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";

const App = () => {
  const handleClick = () => {
    document.body.setAttribute("data-theme", "theme-three");
  };
  return (
    <div className="App">
      <Header />
      <Display />
      <ButtonPanel />
      <button onClick={handleClick}>Change Theme</button>
    </div>
  );
};

export default App;
