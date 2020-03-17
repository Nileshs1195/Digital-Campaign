
import React from 'react';
import ReactDOM from 'react-dom';

class ToggleButton extends React.Component {
    constructor() {
        super();
        this.state = {
            isON: true,
            status: " "
        }
    }

    buttonClick = () => {
        this.setState(prevState => ({ isON: !prevState.isON }))
    }

    render() {
        return (
            <div>                
                <table className="TableStyle">
                    <tbody>
                    <tr className="column">
                        <th>Partner</th> 
                        <th>Campaign</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                    <tr class="RowOdd">
                        <td>Quest</td>
                        <td>Windows 7</td>
                        <td>Feb 29,2020</td>
                        <td>April 5,2020</td>
                    </tr>
                    <tr class="RowEven">
                        <td>Mobiliya </td>
                        <td>Windows 10 upgrade</td>
                        <td>March 10,2020</td>
                        <td>May 7,2020</td>
                    </tr>
                    <tr class="RowEven">
                        <td>HP </td>
                        <td>Machine Performance</td>
                        <td>May 2,2020</td>
                        <td>June 25,2020</td>
                    </tr>
                    <tr class="RowOdd">
                        <td>TCS</td>
                        <td>Work Culture</td>
                        <td>Jan 8,2020</td>
                        <td>April 8,2020 </td>
                    </tr>
                    </tbody>
                </table>
                
                <br/>
                <button className="button button1 " onClick={this.buttonClick}>
                    {/* {this.state.isON ? "Turning ON" : "Turning OFF"} */}
                    Submit
                </button>

            </div>
        );
    }
} export default ToggleButton;