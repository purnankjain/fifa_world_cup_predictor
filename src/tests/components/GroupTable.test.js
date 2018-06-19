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

  it('should have only one winner', () => {
    var group = TestUtils.renderIntoDocument(groupTableComponent);
    var groupNode = ReactDOM.findDOMNode(group);

    TestUtils.Simulate.click(groupNode.childNodes[1]);
    TestUtils.Simulate.click(groupNode.childNodes[2]);
    TestUtils.Simulate.click(groupNode.childNodes[3]);

    expect(groupNode.getElementsByClassName(_WINNER_CLASS_NAME).length).toEqual(1);
    expect(groupNode.getElementsByClassName(_WINNER_CLASS_NAME)[0].innerHTML).toEqual(teams[2]);
  });
});
