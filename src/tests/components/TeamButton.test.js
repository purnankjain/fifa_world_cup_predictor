import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';
import TeamButton from '../../components/TeamButton';

describe('Team Button tests', () => {
  it('should render a box with team name', () => {
    var teamName = "India";
    var rendered = renderer.create(<TeamButton name={teamName} winnerCallback = {() => {}}/>).root;
    expect(rendered.findByType('div').children[0]).toEqual(teamName);
  });
  it('should be clickable to set as team as group winner and back', () => {
    var teamName = 'India';
    var teamButtonWinner = TestUtils.renderIntoDocument(<TeamButton name={teamName} winnerCallback = {() => {}}/>);
    var teamButtonFallback = TestUtils.renderIntoDocument(<TeamButton name={teamName} winnerCallback = {() => {}}/>);
    var teamButtonWinnerNode = ReactDOM.findDOMNode(teamButtonWinner);
    var teamButtonFallbackNode = ReactDOM.findDOMNode(teamButtonFallback);

    TestUtils.Simulate.click(teamButtonWinnerNode);
    TestUtils.Simulate.click(teamButtonFallbackNode);
    TestUtils.Simulate.click(teamButtonFallbackNode);

    expect(teamButtonWinnerNode.className).toEqual('winner');
    expect(teamButtonFallbackNode.className).toEqual('');
  });
});