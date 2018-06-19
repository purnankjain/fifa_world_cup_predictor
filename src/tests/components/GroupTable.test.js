import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import GroupTable from '../../components/GroupTable'
import TeamButton from '../../components/TeamButton';

describe('GroupTable component test', () => {
  it('should match snapshot', () => {
    var teams = ['India', 'Pakistan', 'Sri Lanka'];
    var groupName = "Group A";
    var rendered = renderer.create(<GroupTable name={groupName} teams={teams}/>).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it('should render multiple teamButtons', () => {
    var teams = ['India', 'Pakistan', 'Sri Lanka'];
    var groupName = "Group A";

    var rendered = renderer.create(<GroupTable name={groupName} teams={teams}/>).root;

    expect(rendered.findAllByType(TeamButton).length).toEqual(teams.length);
  });

  it('should have only one winner', () => {
    var teams = ['India', 'Pakistan', 'Sri Lanka'];
    var groupName = "Group A";
    var group = TestUtils.renderIntoDocument(<GroupTable name={groupName} teams={teams}/>);
    var groupNode = ReactDOM.findDOMNode(group);

    TestUtils.Simulate.click(groupNode.childNodes[1]);
    TestUtils.Simulate.click(groupNode.childNodes[2]);
    TestUtils.Simulate.click(groupNode.childNodes[3]);

    expect(groupNode.getElementsByClassName('winner').length).toEqual(1);
    expect(groupNode.getElementsByClassName('winner')[0].innerHTML).toEqual(teams[2]);
  });
});
