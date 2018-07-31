import React from 'react';
import App from '../components/App';
import renderer from 'react-test-renderer';

describe('App Tests', () => {
  it('renders without crashing', () => {
    var rendered = renderer.create(<App />).toJSON();
  
    expect(rendered).toMatchSnapshot();
  });  
});
