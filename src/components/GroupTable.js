import React, { Component } from 'react';
import TeamButton from './TeamButton';
import PropTypes from 'prop-types';

export default class GroupTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : props.name,
      teams : props.teams
    };
  }
  render() {
    var teamButtons = this.state.teams.map((team, index) => <TeamButton name={team} key={index} />);
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
