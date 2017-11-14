import React from 'react';
import { shallow } from 'enzyme';
import NotFound from 'components/pages/NotFound.js';

describe('<NotFound />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<NotFound />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "notfound-component"', function () {
      expect(component.hasClass('notfound-component')).to.equal(true);
    });
  });
});
