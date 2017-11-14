import React from 'react';
import { shallow } from 'enzyme';
import HomePage from 'components/pages/HomePage.js';

describe('<HomePage />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<HomePage />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "homepage-component"', function () {
      expect(component.hasClass('homepage-component')).to.equal(true);
    });
  });
});
