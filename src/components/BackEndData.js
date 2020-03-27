
import React from 'react';

class BackEendData extends React.Component {
    constructor() {
        super();
         this.state = {
            groups: []
        }
    }

    callUrl=()=> {
        fetch('http://localhost:9090/visitorapp/allVisitors')
          .then(res => res.json())
          .then(data => this.setState({ groups: data }));
          console.log(this.state.groups);
    } 

    render() {       
            return (
               <div>
                   <button type="submit" onClick={this.callUrl}>CallUrl</button>
                <div>                   
               {
               this.state.groups.map((item,index)=>
               <div key={index}>
                   {item.name}  
                   {item.mobileNo}
                   {item.address}                 
                   </div>
               )
               }
               </div>
               </div>
             )
         }        
}
export default BackEendData;