import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/css/teamButton.css';

export default class TeamButton extends Component {
  constructor(props) {
    super(props);
    this.setWinner = this.setWinner.bind(this);
  }

  setWinner(e) {
    if(!this.props.isWinner) {
      this.props.winnerCallback(e);
    }
    else {
      this.props.rollbackWinnerCallback(e);
    }
  }

  render() {
    var styleClass = this.props.isWinner ? 'winner' : '';
    return (<div onClick={this.setWinner} className={styleClass} >{this.props.name}</div>);
  }
}

TeamButton.propTypes = {
  name: PropTypes.string.isRequired,
  winnerCallback: PropTypes.func.isRequired,
  rollbackWinnerCallback: PropTypes.func.isRequired,
  isWinner: PropTypes.bool
};
