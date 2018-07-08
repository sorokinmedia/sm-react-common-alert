import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Alert  from './index';

configure({ adapter: new Adapter() });

function setup(){
	const props = {}
	const container = shallow(<Alert {...props}/>)
	return {container, props}
}

describe('Alert', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true);
	});

});
