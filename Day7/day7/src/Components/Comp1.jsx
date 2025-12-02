import React, { Component } from 'react'

export default class Comp1 extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         greet:"Good Evening",
    //     };

    // }
    state ={
        greet:"Good Evening",
    }

    changeGreet =() =>{
        this.setState({greet:"Good Night"});
    };

  render() {
    return (
      <div> 
        <h3 >{this.state.greet}</h3>
        <button onClick={this.changeGreet}>Change Greet</button>
      </div>
    )
  }
}
