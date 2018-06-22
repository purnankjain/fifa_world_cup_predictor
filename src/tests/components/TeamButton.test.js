import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';
import TeamButton from '../../components/TeamButton';

var teamName = "India";
const _WINNER_CLASS_NAME = 'winner';

describe('Team Button tests', () => {
  it('should render a box with team name', () => {
    var teamButtonComponent = (<TeamButton name={teamName} />)
    var rendered = renderer.create(teamButtonComponent).root;
    expect(rendered.findByType('div').children[0]).toEqual(teamName);
  });
  it('should render a winner team button', () => {
    var teamButtonComponent = (<TeamButton name={teamName} isWinner/>);
    var rendered = renderer.create(teamButtonComponent).root;
    expect(rendered.findByType('div').props['className']).toEqual(_WINNER_CLASS_NAME);
  });
  it('should be clickable to set team as group winner', () => {
    var winnerCallbackCount = 0;
    var incrementWinnerCallbackCount = () => {winnerCallbackCount++};
    var teamButtonComponent = (<TeamButton name={teamName} winnerCallback={incrementWinnerCallbackCount} />)
    var teamButtonWinner = TestUtils.renderIntoDocument(teamButtonComponent);
    var teamButtonNode = ReactDOM.findDOMNode(teamButtonWinner);

    TestUtils.Simulate.click(teamButtonNode);

    expect(winnerCallbackCount).toEqual(1);
  });
  it('should be clickable to rollback group winner', () => {
    var rollbackWinnerCallbackCount = 0;
    var incrementRollbackWinnerCallbackCount = () => {rollbackWinnerCallbackCount++};
    var teamButtonComponent = (<TeamButton name={teamName} rollbackWinnerCallback={incrementRollbackWinnerCallbackCount} isWinner/>)
    var teamButtonWinner = TestUtils.renderIntoDocument(teamButtonComponent);
    var teamButtonNode = ReactDOM.findDOMNode(teamButtonWinner);

    TestUtils.Simulate.click(teamButtonNode);

    expect(rollbackWinnerCallbackCount).toEqual(1);
  });
});