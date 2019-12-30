import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow';
import { importSheet, getTag0, getTags, rows, tag0Unique, tagAllUnique, filteredStandards, filteredSubStandards, getFilteredSubStandards } from './api/spreadsheet';
import generateContent from './functions/generateContent';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('App renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
});

it('returns shallow App', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
});


expect.extend({
  toContainObject(received, argument) {
    const pass = this.equals(received, 
      expect.arrayContaining([
        expect.objectContaining(argument)
      ])
    )
    if (pass) {
      return {
        message: () => (`expected ${this.utils.printReceived(received)} not to contain object ${this.utils.printExpected(argument)}`),
        pass: true
      }
    } else {
        return {
        message: () => (`expected ${this.utils.printReceived(received)} to contain object ${this.utils.printExpected(argument)}`),
        pass: false
      }
    }
  }
})

const state = [
  { 0: "Internet of Things",
    1: "Public Realm",
    2: "MIMs",
    3: "Mobility",
    4: "Health",
    5: "Smart City Governance",
    6: "Smart City ICT",
    7: "Data Management & AI",
    8: "Buildings",
    9: "Citizen Centric Services",
    10: "Environment",
    11: "Utilities"},
]


test('check tag0Unique array contains correct objects', () => {
  expect(state).toContainObject({ 5: 'Smart City Governance' })
  expect(state).not.toContainObject({ 10: 'Environmenta' })
});