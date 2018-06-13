import React from 'react';
import renderer from 'react-test-renderer';
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
});
