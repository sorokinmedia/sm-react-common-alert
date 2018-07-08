import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from '../dist';

class App extends Component {

	render() {

		return (
			<div>
				Example
				<Alert />
			</div>
		)
	}
}

App.propTypes = {}
App.defaultProps = {}

export default App
