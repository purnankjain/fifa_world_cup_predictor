import React, { Component } from 'react';
import '../styles/css/App.css';
import GroupTable from './GroupTable';

class App extends Component {
  render() {
    return (<div>
      <GroupTable name={'Group A'} teams={['India', 'Austr', 'West']}/>
      <GroupTable name={'Group B'} teams={['Brazil', 'Arg', 'Chile']}/>
      <GroupTable name={'Group C'} teams={['USA', 'Canada', 'England']}/>
    </div>);
  }
}

export default App;
