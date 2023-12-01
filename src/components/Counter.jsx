import React, { Component, Fragment } from "react";

export default class Counter extends Component {
  state = {
    counter: 5,
    name: "My Name",
    image: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  //   constructor() {
  //     super();
  //     // this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  styles = {
    fontSize: 20,
  };

  getName = () => {
    return "Roger";
  };

  getClassName() {
    // return this.state.counter > 0
    //   ? "badge bg-primary"
    //   : "badge bg-warning text-dark";
    if (this.state.counter > 0) {
      return "badge bg-primary";
    }
    return "badge bg-warning text-dark";
  }

  formatText() {
    if (this.state.counter > 0) {
      return this.state.counter;
    }
    return "Zero";
  }

  renderTags = () => {
    // return <h1>Render Tags</h1>
    // if(this.state.tags.length === 0) {
    //     return null
    // }
    // return (
    //     <ul>
    //         {this.state.tags.map((tag) => (
    //             <li key={tag}>{tag}</li>
    //         ))}
    //     </ul>
    // )
    // return this.state.tags.length > 0 ? (
    //     <ul>
    //         {this.state.tags.map((tag) => (
    //             <li key={tag}>{tag}</li>
    //         ))}
    //     </ul>
    // ) : (
    //     <h1>There are no tags!</h1>
    // )
  };

  handleIncrement = () => {
    // console.log("inside handleIncrement");
    // this.state.counter++;

    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrement = () => {
    // console.log("inside handleIncrement");
    // this.state.counter++;

    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div>
        {/* <div 
                style={this.styles}
            >{this.state.name}</div> */}
        {/* <img src={this.state.image} alt="">
            </img>
            <div>{this.getName()}</div>
            <div>{this.renderTags()}</div> */}

        <button
          disabled={this.state.counter === 0}
          onClick={this.handleDecrement}
        >
          -
        </button>
        <span
          style={this.styles}
          //   className={`badge ${
          //     this.state.counter > 0 ? "bg-primary" : "bg-warning text-dark"
          //   }`}
          className={this.getClassName()}
        >
          {this.formatText()}
        </span>

        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
