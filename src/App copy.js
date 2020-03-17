
import React from 'react';
import ReactDOM from 'react-dom';

export default class DemoProps extends React.Component {
  render() {
    return(
      <div>
        <h2>Accessing props from same class</h2>
    <h4> Hello, {this.user}</h4>
      </div>
    );
  }
}

ReactDOM.render(
<DemoProps user="Nilesh"/>, document.getElementById("root")
  
);