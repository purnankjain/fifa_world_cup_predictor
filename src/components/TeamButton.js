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
    var styleClass = this.props.isRunnerUp ? 'runnerUp' : styleClass;
    return (<div onClick={this.setWinner} className={styleClass} >{this.props.name}</div>);
  }
}

TeamButton.propTypes = {
  name: PropTypes.string.isRequired,
  winnerCallback: PropTypes.func,
  rollbackWinnerCallback: PropTypes.func,
  isWinner: PropTypes.bool,
  isRunnerUp: PropTypes.bool,
};

TeamButton.defaultProps = {
  winnerCallback: (e) => {},
  runnerUpCallback: (e) => {}
};
