
import React from 'react';

class Todos extends React.Component {    
    render() {
        console.log(this.props.todos)
        return (
            <div>   
            <div className="headingName">  
                Todos Component                   
            </div>
            </div>
        );
    }
} export default Todos;