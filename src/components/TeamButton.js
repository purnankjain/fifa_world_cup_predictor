import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/css/teamButton.css';

export default class TeamButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var styleClass = this.props.isWinner ? 'winner' : '';
    return (<div onClick={this.props.onClickCallback} className={styleClass} >{this.props.name}</div>);
  }
}

TeamButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func,
  isWinner: PropTypes.bool
};

TeamButton.defaultProps = {
  onClickCallback: (e) => {},
};
