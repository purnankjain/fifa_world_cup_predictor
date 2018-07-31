import React, { Component } from 'react';
import TeamButton from './TeamButton';
import PropTypes from 'prop-types';
import Team from '../library/Team';

export default class GroupTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupWinners: []
    };
    this.handleTeamButtonClick = this.handleTeamButtonClick.bind(this);
  }
  handleTeamButtonClick(e) {
    let teamName = e.target.innerHTML;
    this.setState((prevState, props) => { return { groupWinners: Team.updateGroupWinner(teamName, prevState.groupWinners, props.winnerCount)}}, () => { this.props.winnerUpdateCallback(this.state.groupWinners); });
  }
  render() {
    var { groupWinners } = this.state;
    var teamButtons = this.props.teams.map((team, index) => <TeamButton name={team} key={index} onClickCallback={this.handleTeamButtonClick} isWinner={Team.isWinner(groupWinners, team)}/>);
    return (<div>
      <h3>{this.props.name}</h3>
      {teamButtons}
      </div>)
  }
}

GroupTable.propTypes = {
  name : PropTypes.string.isRequired,
  teams : PropTypes.arrayOf(PropTypes.string).isRequired,
  winnerCount : PropTypes.number,
  winnerUpdateCallback: PropTypes.func
};

GroupTable.defaultProps = {
  winnerCount : 1,
  winnerUpdateCallback: () => {}
};
