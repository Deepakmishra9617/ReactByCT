import React, { Component } from 'react'

export default class Unmounting extends Component {



    constructor (){ 
        super();
        this.state={
            count: 0
        }
        console.log("constructor")
    }

    startTimer =()=>{
        console.log ("Timer Started")
        this.intervalid = setInterval(()=>{
            this.setState({
                count:this.state.count+1});
            
        },1)
    }

    componentWillUnmount(){
        console.log("componentWIll Unmount")
    }

    stopTimer=() => clearInterval(this.intervalid);



  render() {
    console.log("render called")

    return (
      <div>
        <h3>Count: {this.state.count} </h3>
        <button onClick={this.startTimer}>Start Timer</button>
        <button onClick={this.stopTimer}> Stop Timer</button>
      </div>
    )
  }
}
