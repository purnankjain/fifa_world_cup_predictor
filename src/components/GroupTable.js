import React, { Component } from 'react';
import TeamButton from './TeamButton';
import PropTypes from 'prop-types';

export default class GroupTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : props.name,
      teams : props.teams,
      groupWinner : '',
      winnerRef : null
    };
    this.updateGroupWinner = this.updateGroupWinner.bind(this);
  }
  updateGroupWinner(winner, ref, winnerClassName) {
    if(this.state.winnerRef !== null) {
      this.state.winnerRef.current.classList.remove(winnerClassName); 
    }
    ref.current.classList.add(winnerClassName);
    this.setState({ groupWinner: winner, winnerRef: ref });
  }
  render() {
    var teamButtons = this.state.teams.map((team, index) => <TeamButton name={team} key={index} winnerCallback = {this.updateGroupWinner} />);
    return (<div>
      <h3>{this.state.name}</h3>
      {teamButtons}
      </div>)
  }
}

GroupTable.propTypes = {
  name : PropTypes.string.isRequired,
  teams : PropTypes.arrayOf(PropTypes.string).isRequired
}
