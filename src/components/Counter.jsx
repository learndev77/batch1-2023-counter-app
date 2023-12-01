import React, { Component, Fragment } from "react";

// export default class Counter extends Component {
//   state = {
//     // counter: 5,
//     name: "My Name",
//     image: "https://picsum.photos/200",
//     tags: ["tag1", "tag2", "tag3"],
//   };

//   constructor() {
//     super();
//     // console.log(this);
//     // this.handleIncrement = this.handleIncrement.bind(this);
//   }

//   //   componentDidMount() {
//   //     console.log("mount");
//   //   }

//   componentWillUnmount() {
//     console.log("will unmount");
//   }

//   styles = {
//     fontSize: 20,
//   };

//   getName = () => {
//     return "Roger";
//   };

//   getClassName() {
//     // return this.state.counter > 0
//     //   ? "badge bg-primary"
//     //   : "badge bg-warning text-dark";
//     if (counter.value > 0) {
//       return "badge bg-primary";
//     }
//     return "badge bg-warning text-dark";
//   }

//   formatText() {
//     if (counter.value > 0) {
//       return counter.value;
//     }
//     return "Zero";
//   }

//   renderTags = () => {
//     // return <h1>Render Tags</h1>
//     // if(this.state.tags.length === 0) {
//     //     return null
//     // }
//     // return (
//     //     <ul>
//     //         {this.state.tags.map((tag) => (
//     //             <li key={tag}>{tag}</li>
//     //         ))}
//     //     </ul>
//     // )
//     // return this.state.tags.length > 0 ? (
//     //     <ul>
//     //         {this.state.tags.map((tag) => (
//     //             <li key={tag}>{tag}</li>
//     //         ))}
//     //     </ul>
//     // ) : (
//     //     <h1>There are no tags!</h1>
//     // )
//   };

//   render() {
//     return (
//       <div>
//         {/* {children} */}
//         {/* <div 
//                 style={this.styles}
//             >{this.state.name}</div> */}
//         {/* <img src={this.state.image} alt="">
//             </img>
//             <div>{this.getName()}</div>
//             <div>{this.renderTags()}</div> */}

//         <button
//           disabled={counter.value === 0}
//           onClick={() => onDecrement(counter.id)}
//         >
//           -
//         </button>
//         <span
//           style={this.styles}
//           //   className={`badge ${
//           //     this.state.counter > 0 ? "bg-primary" : "bg-warning text-dark"
//           //   }`}
//           className={this.getClassName()}
//         >
//           {this.formatText()}
//         </span>

//         <button onClick={() => onIncrement(counter.id)}>
//           +
//         </button>

//         <button
//           onClick={() => onDelete(counter.id)}
//           className="btn btn-danger ms-1"
//         >
//           Delete
//         </button>
//       </div>
//     );
//   }
// }

const Counter = ({counter, onIncrement, onDecrement, onDelete}) => {

    // const getStyles = () =>  {
    //         fontSize: 20,
    //       };
        
          const getName = () => {
            return "Roger";
          };
        
          const getClassName = () =>  {
            // return this.state.counter > 0
            //   ? "badge bg-primary"
            //   : "badge bg-warning text-dark";
            if (counter.value > 0) {
              return "badge bg-primary";
            }
            return "badge bg-warning text-dark";
          }
        
          const formatText = () => {
            if (counter.value > 0) {
              return counter.value;
            }
            return "Zero";
          }

            return (
              <div>
                {/* {children} */}
                {/* <div 
                        style={this.styles}
                    >{this.state.name}</div> */}
                {/* <img src={this.state.image} alt="">
                    </img>
                    <div>{this.getName()}</div>
                    <div>{this.renderTags()}</div> */}
        
                <button
                  disabled={counter.value === 0}
                  onClick={() => onDecrement(counter.id)}
                >
                  -
                </button>
                <span
                //   style={styles}
                  //   className={`badge ${
                  //     this.state.counter > 0 ? "bg-primary" : "bg-warning text-dark"
                  //   }`}
                  className={getClassName()}
                >
                  {formatText()}
                </span>
        
                <button onClick={() => onIncrement(counter.id)}>
                  +
                </button>
        
                <button
                  onClick={() => onDelete(counter.id)}
                  className="btn btn-danger ms-1"
                >
                  Delete
                </button>
              </div>
            );
};

export default Counter