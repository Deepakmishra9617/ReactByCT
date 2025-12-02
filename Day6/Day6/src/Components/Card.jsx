import React from "react";
import "./Card.css"

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} alt="loading.." />
        <h3>{this.props.topic}</h3>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default Card;
