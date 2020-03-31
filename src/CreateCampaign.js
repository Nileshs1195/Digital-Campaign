
import React from 'react';

class CreateCampaign extends React.Component {
    constructor() {
        super();
        this.state = {
            answerData: [],
            companyName: " ",
            companyId: " ",
            campaignName: " ",
            noOfDevices: " ",
            compName: " ",
            compId: " ",
            staticCampaigNname: " ",
            staticNoOfDevices: " "
        }
    }

    setAnswerData = (event) => {
        //    this.setState({answerData: event.target.value})
        //    this.state.answerData.push(this.state.companyId);
        answerData: this.state.answerData.concat('new value')
    }

    setCompanyName = (event) => {
        this.setState({ companyName: event.target.value })
    }
    render() {
        return (
            <div>
                <div>
                    <h2 style={{ color: "dodgerblue", marginLeft: "80px" }}>Create a New Campaign</h2>
                </div>
                <table className="textfield">
                    <tbody>
                        <div>

                            <div style={{ marginLeft: "-100px", marginBottom: "-19px" }}>
                                <label style={{ fontWeight: "bold", margin: "40px", color: "slategrey" }}>{this.state.compId}</label>
                            </div>

                            <div style={{ marginLeft: "50px" }}>
                                {/* <label style={{fontWeight:"bold", margin:"40px", color: "slategrey"}}>Company Name</label><br/> */}
                                <input type="text" onChange={(e) => this.setState({ companyId: e.target.value, compId: "Company Id" })} className="textfield" placeholder="Company Id" /> <br /><br />
                            </div>

                            <div style={{ marginLeft: "-100px", marginBottom: "-19px" }}>
                                <label style={{ fontWeight: "bold", margin: "40px", color: "slategrey" }}>{this.state.compName}</label>
                            </div>

                            <div style={{ marginLeft: "50px" }}>
                                <input type="text" onChange={(e) => this.setState({ companyName: e.target.value, compName: "Campaign Name" })} className="textfield" placeholder="Campaign Name" /><br /><br />
                            </div>

                            <div style={{ marginLeft: "-100px", marginBottom: "-19px" }}>
                                <label style={{ fontWeight: "bold", margin: "40px", color: "slategrey" }}>{this.state.staticCampaigNname}</label>
                            </div>

                            <div style={{ marginLeft: "50px" }}>
                                <input type="text" onChange={(e) => this.setState({ campaignName: e.target.value, staticCampaigNname: "Description" })} className="textfield" placeholder="Description" /><br /><br />
                            </div>

                            <div style={{ marginLeft: "-100px", marginBottom: "-19px" }}>
                                <label style={{ fontWeight: "bold", margin: "40px", color: "slategrey" }}>{this.state.staticNoOfDevices}</label>
                            </div>
                            <div style={{ marginLeft: "50px" }}>
                                <input type="text" onChange={(e) => this.setState({ noOfDevices: e.target.value, staticNoOfDevices: " No.of Devices" })} className="textfield" placeholder="Targeted no. of devices" /><br /><br />
                            </div>

                            <div style={{ marginLeft: "-100px", marginBottom: "-19px" }}>
                                <label style={{ fontWeight: "bold", margin: "40px", color: "slategrey" }}>{this.state.staticNoOfDevices}</label>
                            </div>
                            <div style={{ marginLeft: "50px" }}>
                                <input type="text" onChange={(e) => this.setState({ noOfDevices: e.target.value, staticNoOfDevices: " End Date" })} className="textfield" placeholder="Targeted no. of devices" /><br /><br />
                            </div>

                            <div style={{ marginLeft: "50px" }}>
                                <input type="text" className="textfield" placeholder="Start Date" />
                                <input type="text" style={{ marginLeft: "40px" }} placeholder="End Date" />
                            </div>

                        </div>
                    </tbody>
                </table>
                {/* <label>{this.state.companyName}</label><br/>         
        <label>{this.state.companyId}</label><br/>         
        <label>{this.state.campaignName}</label><br/> */}

                {/* <div className="compnamePos">
<label>{this.state.compName}</label><br/>    
</div> */}
            </div>
        )
    }
} export default CreateCampaign;