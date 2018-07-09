import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Alert from './index';

configure({ adapter: new Adapter() });
let spy


function setup(customProps, lifeCycle = false) {
	const props = {
		...customProps
	}
	const container = shallow(<Alert {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('Alert component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true);
	});

	it('should componentDidMount called', () => {
		jest.spyOn(Alert.prototype, 'componentDidMount');
		shallow(<Alert />)
		expect(Alert.prototype.componentDidMount).toHaveBeenCalled();
		Alert.prototype.componentDidMount.mockClear()
	});


	it('should show alert message', () => {
		const { container } = setup({ showAlert: 'error message' }, true)
		const instance = container.instance();
		spy = jest.spyOn(instance, 'showErrorAlert')
		instance.msg.show = jest.fn()
		instance.componentDidMount();
		expect(spy).toHaveBeenCalled();
	});

	it('should componentDidUpdate called', () => {
		const { container } = setup({})
		const instance = container.instance();
		instance.showErrorAlert = jest.fn(() => true)
		container.setProps({
			updateResponse: { error: "Error message" },
			clearResponse: jest.fn()
		});
		expect(instance.componentDidMount).toHaveBeenCalled()
	});

});
