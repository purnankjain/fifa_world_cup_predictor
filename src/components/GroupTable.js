import React, { Component } from 'react';
import TeamButton from './TeamButton';
import PropTypes from 'prop-types';

export default class GroupTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupWinners: []
    };
    this.handleTeamButtonClick = this.handleTeamButtonClick.bind(this);
  }
  isTeamWinner(teamName) {
    return this.state.groupWinners.includes(teamName);
  }
  handleTeamButtonClick(e) {
    if(this.state.groupWinners.includes(e.target.innerHTML)) {
      let { groupWinners } = this.state;
      let index = groupWinners.indexOf(e.target.innerHTML);
      groupWinners.splice(index, 1);
      this.setState({ groupWinners: groupWinners });
    } else {
      if(this.state.groupWinners.length < this.props.winnerCount) {
        let { groupWinners } = this.state;
        groupWinners.push(e.target.innerHTML);
        this.setState({ groupWinners: groupWinners });
      }
    }
  }
  render() {
    var teamButtons = this.props.teams.map((team, index) => <TeamButton name={team} key={index} onClickCallback={this.handleTeamButtonClick} isWinner={this.isTeamWinner(team)}/>);
    return (<div>
      <h3>{this.props.name}</h3>
      {teamButtons}
      </div>)
  }
}

GroupTable.propTypes = {
  name : PropTypes.string.isRequired,
  teams : PropTypes.arrayOf(PropTypes.string).isRequired,
  winnerCount : PropTypes.number
};

GroupTable.defaultProps = {
  winnerCount : 1
};
