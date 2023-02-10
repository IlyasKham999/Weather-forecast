import React, {Component} from "react";


class App extends Component{
  render() {
    return(
      <div className="main">
        <div className="weather__city"></div>
        <div className="weather__forecast"></div>
        <div className="weather__desc"></div>
        <div className="weather__icon"></div>
      </div>
    )
  }
}

export default App