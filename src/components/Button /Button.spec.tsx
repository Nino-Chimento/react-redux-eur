import { render, screen } from '@testing-library/react';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import { Button } from './Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button Test', () => {
  test('Test for rendering', () => {
    render(<Button>Button</Button>);
    expect(screen.getByText('Button')).toBeDefined();
  });
});

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });
  it('should render correctly', () => {
    const mockFn = jest.fn();
    const tree = shallow(<Button handleClick={mockFn}>button test</Button>);
    tree.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
