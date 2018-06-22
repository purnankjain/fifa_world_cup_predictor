import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';
import TeamButton from '../../components/TeamButton';

var teamName = "India";
const _WINNER_CLASS_NAME = 'winner';
const _RUNNERUP_CLASS_NAME = 'runnerUp';

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
  it('should render a runner up team button', () => {
    var teamButtonComponent = (<TeamButton name={teamName} isRunnerUp/>);
    var rendered = renderer.create(teamButtonComponent).root;
    expect(rendered.findByType('div').props['className']).toEqual(_RUNNERUP_CLASS_NAME);
  });
  it('should be clickable', () => {
    var onClickCallbackCount = 0;
    var incrementOnClickCallback = () => {onClickCallbackCount++};
    var teamButtonComponent = (<TeamButton name={teamName} onClickCallback={incrementOnClickCallback}/>);
    var teamButtonWinner = TestUtils.renderIntoDocument(teamButtonComponent);
    var teamButtonNode = ReactDOM.findDOMNode(teamButtonWinner);

    TestUtils.Simulate.click(teamButtonNode);

    expect(onClickCallbackCount).toEqual(1);
  });
});