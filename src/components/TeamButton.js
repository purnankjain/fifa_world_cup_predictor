import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TeamButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName : props.name
    }
  }
  render() {
    return (<div>{this.state.teamName}</div>);
  }
}

TeamButton.propTypes = {
  name: PropTypes.string
};