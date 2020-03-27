
import React from 'react';
import Todos from './components/Todos';
import BackEndData from './components/BackEndData';
import CampaignList from './components/CampaignList';
import CreateCampaign from './components/CreateCampaign';
import BackEndRestApi from './components/BackEndRestApi';

// import CampaignDetails from './components/campaignDetails.json'
// import checkbox from './public/checkbox.png'
// import RadioButton from './components/RadioButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="campaignDetails">
        <div>
        <h2 className="Titlecentered">Digital Campaign</h2>
        </div>
        {/* <CreateCampaign/> */}
        <CampaignList/>
        {/* <BackEndRestApi/> */}
      </div>
    );
  }
} export default App;