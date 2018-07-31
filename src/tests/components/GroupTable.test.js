import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import GroupTable from '../../components/GroupTable'
import TeamButton from '../../components/TeamButton';

var teams = ['India', 'Pakistan', 'Sri Lanka'];
var groupName = "Group A";
var groupTableComponent = <GroupTable name={groupName} teams={teams}/>;
var _WINNER_CLASS_NAME = 'winner';

describe('GroupTable component test', () => {
  it('should match snapshot', () => {
    var rendered = renderer.create(groupTableComponent).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it('should render multiple teamButtons', () => {
    var rendered = renderer.create(groupTableComponent).root;

    expect(rendered.findAllByType(TeamButton).length).toEqual(teams.length);
  });

  it('should set member team button as winner on click', () => {
    var group = TestUtils.renderIntoDocument(groupTableComponent);
    var groupNode = ReactDOM.findDOMNode(group);

    TestUtils.Simulate.click(groupNode.childNodes[1]);

    expect(groupNode.getElementsByClassName(_WINNER_CLASS_NAME).length).toEqual(1);
    expect(groupNode.getElementsByClassName(_WINNER_CLASS_NAME)[0].innerHTML).toEqual(teams[0]);
  });

  it('should rollback winner on click', () => {
    var group = TestUtils.renderIntoDocument(groupTableComponent);
    var groupNode = ReactDOM.findDOMNode(group);

    TestUtils.Simulate.click(groupNode.childNodes[1]);
    TestUtils.Simulate.click(groupNode.childNodes[1]);

    expect(groupNode.getElementsByClassName(_WINNER_CLASS_NAME).length).toEqual(0);
  });

  it('should have only one winner', () => {
    var group = TestUtils.renderIntoDocument(groupTableComponent);
    var groupNode = ReactDOM.findDOMNode(group);

    TestUtils.Simulate.click(groupNode.childNodes[1]);
    TestUtils.Simulate.click(groupNode.childNodes[2]);

    expect(groupNode.getElementsByClassName(_WINNER_CLASS_NAME).length).toEqual(1);
    expect(groupNode.getElementsByClassName(_WINNER_CLASS_NAME)[0].innerHTML).toEqual(teams[0]);
  });

  it('should have 2 winners when groupTable is made for 2 winners', () => {
    var winnerCount = 2;
    var groupTableComponent = <GroupTable name={groupName} teams={teams} winnerCount={winnerCount}/>;
    var group = TestUtils.renderIntoDocument(groupTableComponent);
    var groupNode = ReactDOM.findDOMNode(group);

    TestUtils.Simulate.click(groupNode.childNodes[1]);
    TestUtils.Simulate.click(groupNode.childNodes[2]);
    TestUtils.Simulate.click(groupNode.childNodes[3]);

    expect(groupNode.getElementsByClassName(_WINNER_CLASS_NAME).length).toEqual(2);
    expect(groupNode.getElementsByClassName(_WINNER_CLASS_NAME)[0].innerHTML).toEqual(teams[0]);
    expect(groupNode.getElementsByClassName(_WINNER_CLASS_NAME)[1].innerHTML).toEqual(teams[1]);
  });

  it('should make a callback on winner update', () => {
    var winnerUpdateCallbackCount = 0;
    var winnerUpdateCallback = () => { winnerUpdateCallbackCount++ };
    var groupTableComponent = <GroupTable name={groupName} teams={teams} winnerUpdateCallback={winnerUpdateCallback}/>;
    var group = TestUtils.renderIntoDocument(groupTableComponent);
    var groupNode = ReactDOM.findDOMNode(group);

    TestUtils.Simulate.click(groupNode.childNodes[1]);

    expect(winnerUpdateCallbackCount).toEqual(1);
  });
});
