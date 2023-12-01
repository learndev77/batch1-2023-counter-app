import React, { Component, Fragment } from "react";
import Counter from "./Counter";

// export default class Counters extends Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.onReset}
//           className="btn btn-primary ms-4 mt-2"
//         >
//           Reset
//         </button>
//         {this.props.counters.map((counter) => (
//           <Counter
//             counter={counter}
//             key={counter.id}
//             onDelete={this.props.onDelete}
//             onIncrement={this.props.onIncrement}
//             onDecrement={this.props.onDecrement}
//           >{`Counter: ${counter.id}`}</Counter>
//         ))}
//       </div>
//     );
//   }
// }

const Counters = ({
  counters,
  onDelete,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary ms-4 mt-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          counter={counter}
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        >{`Counter: ${counter.id}`}</Counter>
      ))}
    </div>
  );
};

export default Counters;
