import React, { Component } from "react";
import { Button, Dropdown, Icon } from "@MediaMath/design-system-eng";
import "@MediaMath/design-system-eng/dist/main.css";

const friendOptions = [
  {
    text: "Jenny Hess",
    value: "Jenny Hess"
  },
  {
    text: "Jenny Hess",
    value: "Jenny Hess"
  },
  {
    text: "Jenny Hess",
    value: "Jenny Hess"
  },
  {
    text: "Jenny Hess",
    value: "Jenny Hess"
  },
  {
    text: "Jenny Hess",
    value: "Jenny Hess"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Click Me</Button>
        <Dropdown
          placeholder="Select Friend"
          selection
          options={friendOptions}
        />
        <Icon className="add-circle-fill" />
        <div>add-circle-fill</div>
        <Icon className="add-circle-line" />
        <div>add-circle-line</div>
      </div>
    );
  }
}

export default App;
