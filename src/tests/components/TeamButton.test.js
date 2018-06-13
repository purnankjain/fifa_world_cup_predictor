import React from 'react';
import renderer from 'react-test-renderer';
import TeamButton from '../../components/TeamButton';

describe('Team Button tests', () => {
  it('should render a box with team name', () => {
    var teamName = "India";
    var rendered = renderer.create(<TeamButton name={teamName}/>).root;
    expect(rendered.findByType('div').children[0]).toEqual(teamName);
  })
});