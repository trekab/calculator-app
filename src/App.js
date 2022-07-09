import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import calculate from "./logic/calculate";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = (buttonName) => {
      this.setState((previousState) => calculate(previousState, buttonName));
    };
  }

  render() {
    const { total, next } = this.state;
    let result = next ? next : total;
    if (!total) {
      result = 0;
    }
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <main>
            <Display result={`${result}`} />
            <ButtonPanel clickHandler={this.handleClick} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
