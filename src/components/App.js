import React, { Component } from 'react';
import '../styles/css/App.css';
import GroupTable from './GroupTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupAWinners : [],
      groupBWinners : [],
      semiFinal1Winner : '',
      semiFinal2Winner : '',
    };
    this.groupAWinnersUpdateCallback = this.groupAWinnersUpdateCallback.bind(this);
    this.groupBWinnersUpdateCallback = this.groupBWinnersUpdateCallback.bind(this);
    this.semiFinal1WinnerUpdateCallback = this.semiFinal1WinnerUpdateCallback.bind(this);
    this.semiFinal2WinnerUpdateCallback = this.semiFinal2WinnerUpdateCallback.bind(this);
    this.finalWinnerUpdateCallback = this.finalWinnerUpdateCallback.bind(this);
  }
  groupAWinnersUpdateCallback(groupWinners) {
    this.setState({groupAWinners: groupWinners});
  }
  groupBWinnersUpdateCallback(groupWinners) {
    this.setState({groupBWinners: groupWinners});
  }
  semiFinal1WinnerUpdateCallback(groupWinners) {
    this.setState({semiFinal1Winner: groupWinners[0]});
  }
  semiFinal2WinnerUpdateCallback(groupWinners) {
    this.setState({semiFinal2Winner: groupWinners[0]});
  }
  finalWinnerUpdateCallback(groupWinners) {
    this.setState({finalWinner: groupWinners[0]});
  }
  render() {
    return (<div>
      <GroupTable name={'Group A'} teams={['India', 'Pakistan', 'England', 'Sri Lanka']} winnerCount={2} winnerUpdateCallback={this.groupAWinnersUpdateCallback}/>
      <GroupTable name={'Group B'} teams={['Austrailia', 'New Zealand', 'West Indies', 'South Africa']} winnerCount={2} winnerUpdateCallback={this.groupBWinnersUpdateCallback}/>
      <GroupTable name={'Semi Finals 1'} teams={[this.state.groupAWinners[0], this.state.groupBWinners[1]]} winnerUpdateCallback={this.semiFinal1WinnerUpdateCallback}/>
      <GroupTable name={'Semi Finals 2'} teams={[this.state.groupAWinners[1], this.state.groupBWinners[0]]} winnerUpdateCallback={this.semiFinal2WinnerUpdateCallback}/>
      <GroupTable name={'Finals'} teams={[this.state.semiFinal1Winner, this.state.semiFinal2Winner]} winnerUpdateCallback={this.finalWinnerUpdateCallback}/>
      <GroupTable name={'Winner'} teams={[this.state.finalWinner]} winnerCount={0} />
    </div>);
  }
}

export default App;
