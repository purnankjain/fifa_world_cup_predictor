import React from 'react';
import renderer from 'react-test-renderer';
import GroupTable from '../../components/GroupTable'
import TeamButton from '../../components/TeamButton';

describe('GroupTable component test', () => {
  it('it should render multiple teamButtons in correct order', () => {
    var teams = ['India', 'Pakistan', 'Sri Lanka'];
    var expectedTeam1 = renderer.create(<TeamButton name={teams[0]} />).toJSON();
    var expectedTeam2 = renderer.create(<TeamButton name={teams[1]} />).toJSON();
    var expectedTeam3 = renderer.create(<TeamButton name={teams[2]} />).toJSON();

    var rendered = renderer.create(<GroupTable teams={teams}/>).toJSON();

    expect(rendered.children.length).toEqual(teams.length);
    expect(rendered.children[0]).toEqual(expectedTeam1);
    expect(rendered.children[1]).toEqual(expectedTeam2);
    expect(rendered.children[2]).toEqual(expectedTeam3);
  });
});