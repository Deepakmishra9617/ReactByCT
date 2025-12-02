import React, { Component } from "react";
export default class Comp2 extends Component {

constructor(props){
    super(props);
    this.state={
 pic:this.props.image,
    }


}

// First  Approach 
//  changeImage=() =>{
//     this.setState({
//         pic:"https://i.pinimg.com/736x/4d/7d/fd/4d7dfdae8d25a2ca202c357cf4f0a732.jpg"
//     })
//  }

 // second Approach 
//    changeImage =() =>{
//     this.setState({
//         pic:this.props.image2
//     })
//  }


// Toggle Image 
toggleImage =() =>{
    this.setState({
        pic:this.state.pic===this.props.image ? this.props.image2 : this.props.image,
    })
}




  render() {
    return (
      <div>
        <img src={this.state.pic} alt="loading.." />
        <button onClick={this.changeImage} >Change Image</button>
        <button onClick={this.toggleImage}> Toggle Image</button>
      </div>
    )
  }
}

