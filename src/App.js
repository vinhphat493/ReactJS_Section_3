import React from "react";
import Person from "./Persons/person";
import "./App.css";
import person from "./Persons/person";

class App extends React.Component {
  state = {
    person: [
      {
        name: "Toan",
        age: "7"
      },
      {
        name: "Phat",
        age: "24"
      },
      {
        name: "Dat",
        age: "9"
      }
    ]
  };

  switchHandlerName = () => {
    this.setState({
      person: [
        ...this.state.person,
        {
          name: "Tam",
          age: "24"
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!!</p>
        <button onClick={this.switchHandlerName}>Switch Name</button>
        {this.state.person.map(ele => {
          return <Person name={ele.name} age={ele.age} />;
        })}
      </div>
    );
  }
  /**
   * Use the props to render data when not have state
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!!!</p>
      <Person name={"Toan"} age={7} />
      <Person name={"Phat"} age={24}>
        My Hobbies : Racing
      </Person>
      <Person name={"Dat"} age={9} />
    </div>
  ); */
}

export default App;
