import React, { Component } from 'react'

export default class Mounting extends Component {

constructor  (props) {
    super(props);
    this.state ={
        count:0,
    }
    console.log("Constructor called")
   
}

static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps")
    return null;
}
componentDidMount(){
    console.log("component Did Mount")

}

  render() {
    console.log("Render called")
    return (
      <div>
        <h1>count:{this.state.count}</h1>
        <button>Increment</button>
      </div>
    )
  }
}
