import React from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom'
import CampaignList from './components/CampaignList'
import CreateCampaign from './CreateCampaign'

class App extends React.Component {

  render() {
    return (
      <div>
        <div>
          <h2 className="Titlecentered">Digital Campaign</h2>
        </div><br /><br />
        <CampaignList />

      </div>
    );
  }
} export default App;