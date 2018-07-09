import PropTypes from 'prop-types';
import React, { Component } from 'react'
import AlertContainer from 'react-alert'

class Alert extends Component {

	static propTypes = {
		updateResponse: PropTypes.object,
		clearResponse: PropTypes.func,
		showAlert: PropTypes.string
	};

	constructor(props) {
		super(props);
		this.msg = {}
	}

	componentDidMount() {
		console.log('did mount');
		if (this.props.showAlert) {
			this.showErrorAlert(this.props.showAlert)
		}
	}

	componentDidUpdate() {
		const { updateResponse } = this.props;
		if (updateResponse) {
			// error
			if (updateResponse.error) {
				this.showErrorAlert(updateResponse.error);
				this.props.clearResponse()
			}
			if (updateResponse.success) {
				this.showSuccessAlert(updateResponse.message);
				this.props.clearResponse()
			}
		}
	}

	alertOptions = {
		offset: 14,
		position: 'top right',
		theme: 'dark',
		time: 10000,
		transition: 'fade'
	}

	showSuccessAlert = (text) => {
		this.msg.show(<span className="text-green">{text}</span>, {
			time: 5000,
			type: 'success',
			icon: <i className="icon fa" />
		})
	}

	showErrorAlert = (text) => {
		this.msg.show(<span className="text-red">{text}</span>, {
			time: 100000,
			type: 'error',
			icon: <i className="icon fa fa-ban" />
		})
	};


	render() {
		return (
			<div>
				<AlertContainer
					ref={(a) => {
						this.msg = a;
						return this.msg
					}}
					{...this.alertOptions}
				/>
			</div>
		)
	}
}

export default Alert
