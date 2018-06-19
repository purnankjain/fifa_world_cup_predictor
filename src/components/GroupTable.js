import React, { Component } from 'react';
import TeamButton from './TeamButton';
import PropTypes from 'prop-types';

export default class GroupTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupWinner : ''
    };
    this.setGroupWinner = this.setGroupWinner.bind(this);
    this.rollbackGroupWinner = this.rollbackGroupWinner.bind(this);
  }
  setGroupWinner(e) {
    this.setState({ groupWinner: e.target.innerHTML });
  }
  rollbackGroupWinner() {
    this.setState({ groupWinner: '' });
  }
  isTeamWinner(teamName) {
    return teamName === this.state.groupWinner;
  }
  render() {
    var teamButtons = this.props.teams.map((team, index) => <TeamButton name={team} key={index} winnerCallback = {this.setGroupWinner} rollbackWinnerCallback={this.rollbackGroupWinner} isWinner={this.isTeamWinner(team)}/>);
    return (<div>
      <h3>{this.props.name}</h3>
      {teamButtons}
      </div>)
  }
}

GroupTable.propTypes = {
  name : PropTypes.string.isRequired,
  teams : PropTypes.arrayOf(PropTypes.string).isRequired
}
