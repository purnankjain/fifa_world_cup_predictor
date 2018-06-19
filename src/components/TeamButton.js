import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/css/teamButton.css';

export default class TeamButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      winnerCallback: props.winnerCallback,
      winner: false
    }
    this.setWinner = this.setWinner.bind(this);
    this.buttonRef = React.createRef();
  }

  setWinner(e) {
    this.setState({winner : !this.state.winner});
    this.state.winnerCallback(this.state.winner, this.buttonRef, 'winner');
  }

  render() {
    var styleClass = this.state.winner ? 'winner' : '';
    return (<div onClick={this.setWinner} className={styleClass} ref={this.buttonRef}>{this.state.name}</div>);
  }
}

TeamButton.propTypes = {
  name: PropTypes.string.isRequired,
  winnerCallback: PropTypes.func.isRequired
};
