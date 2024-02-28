import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React from "react";

class App extends React.Component {
  state = { details: [] };

  componentDidMount() {
    let data;

    axios
      .get("http://127.0.0.1:8000/")
      .then((res) => {
        data = res.data;
        this.setState({ details: data });
        console.log(data);
      })
      .catch((err) => {});
  }
  render() {
    return (
      <div>
        {this.state.details.map((output, id) => {
          <div key={id}>
            <h1>{output.employee}</h1>
            <h1>{output.department}</h1>
          </div>;
        })}
        <h1>kosa</h1>
      </div>
    );
  }
}

export default App;
