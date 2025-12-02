import React, { Component } from 'react'

export default class Updating extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
    console.log("Constructor called");
  }

  static getDerivedStateFromProps(props){
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return "Snapshot value";
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
  }

  addTwo = () => {
    this.setState({
      count: this.state.count + 2
    });
  };

  render() {
    return (
      <div>
        <h2>{this.props.userName}</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.addTwo}>Increment</button>
      </div>
    )
  }
}
