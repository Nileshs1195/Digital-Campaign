
import React from 'react';

class Todos extends React.Component {    
    render() {
        console.log(this.props.todos)
        return (              
            <div className="headingName">                  
           <input type="radio">name</input>                
            </div>           
        );
    }
} export default Todos;