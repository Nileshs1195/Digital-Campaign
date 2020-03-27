
import React from 'react';
import ReactDOM from 'react-dom';

class campaignList extends React.Component {4   
    constructor() {
        super();
        this.state = {
            data: " ",
            campaignListData: []
        }
    }

    componentDidMount=()=> {
        fetch('http://localhost:8082/campn/campaignList')
          .then(res => res.json())
          .then(data => this.setState({ campaignListData: data }));
          console.log(this.state.campaignListData);
    } 

    render() {
        return (
            <div>
                <div className="campaignButton"> 
                <button type="submit" className="button">Create Campaign</button>
                </div>
                <div className="DropdownList">
                    <select>
                    <option value="none" selected disabled hidden> 
                             Action </option>
                        <option value="Update">Update</option>
                        <option value="Reschedule">Reschedule</option>
                        <option value="Stop">Stop</option>
                        <option value="Delete">Delete</option>
                    </select> 
                    <a href="https://www.google.com/">
                        <button type="submit" className="Actionbutton">Go</button>
                    </a>
                </div>
                <br />
                <div>
                <table cellpadding="8"  className="CampaignTable CampaignTablePos">
                    <thead className="column">
                        <th className="ThTd">Select</th>
                        <th className="ThTd">Campaign</th>
                        <th className="ThTd">Description</th>
                        <th className="ThTd">Start Date</th>
                        <th className="ThTd">End Date</th>
                    </thead>
                    <tbody>
                    {                         
                            this.state.campaignListData.map((item,index)=> {
                                return(
                                    <tr key={index}>
                                        <td th className="ThTd"><input type="radio" name="site_name"/></td>                                        
                                        <td className="ThTd" ><a href="" className="hyperLink">{item.name}</a></td>
                                        <td className="ThTd">{item.description}</td>                                                                          
                                        <td className="ThTd">{item.startDate}</td>
                                        <td className="ThTd">{item.endDate}</td>
                                    </tr>
                                );    
                        }) 
                    }            
                    </tbody>
                </table>
                </div><br/>

            </div>
        );
    }
} export default campaignList;