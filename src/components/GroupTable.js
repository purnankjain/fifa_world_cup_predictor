import React, { Component } from 'react';
import TeamButton from './TeamButton';

export default class GroupTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams : props.teams
    };
  }
  render() {
    var teamButtons = this.state.teams.map((team, index) => <TeamButton name={team} key={index} />);
    return (<div>
      {teamButtons}
      </div>)
  }
}