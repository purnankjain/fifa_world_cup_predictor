import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/css/teamButton.css';

export default class TeamButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : props.name,
      winner : false
    }
    this.setWinner = this.setWinner.bind(this);
  }

  setWinner(e) {
    this.setState({winner : !this.state.winner});
  }

  render() {
    var styleClass = this.state.winner ? 'winner' : '';
    return (<div onClick={this.setWinner} className={styleClass}>{this.state.name}</div>);
  }
}

TeamButton.propTypes = {
  name: PropTypes.string.isRequired
};
