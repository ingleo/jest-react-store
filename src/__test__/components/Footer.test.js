import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

const footer = mount(<Footer />);

describe('<Footer />', () => {
  test('Render del componente footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render del título', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer snapshot', () => {
  test('Comprobar la UI del componente footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
