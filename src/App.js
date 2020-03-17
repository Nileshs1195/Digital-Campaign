
import React from 'react';
import Todos from './components/Todos'
import ToggleButton from './components/ToggleButton'

class App extends React.Component {
  
  render() {
    return (
      <div>
        <a href="https://www.quest-global.com/"><h2 className="Titlecentered ">Digital Campaign</h2></a>
       <Todos/>
       <ToggleButton/>
      </div>
    );
  }
} export default App;