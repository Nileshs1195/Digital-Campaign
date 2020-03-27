
import React from 'react';

class BackEndRestApi extends React.Component {
    constructor() {
        super();
         this.state = {
            groups: []
        }
    }

    callUrl=()=> {
        fetch('http://localhost:8082/campn/campaignList')
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
                   {item.description}
                   {item.createdBy}                 
                   </div>
               )
               }
               </div>
               </div>
             )
         }        
}
export default BackEndRestApi;