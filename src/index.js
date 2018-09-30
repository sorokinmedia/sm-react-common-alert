import PropTypes from 'prop-types'
import React, { Component } from 'react'
import AlertContainer from 'react-alert'

class Alert extends Component {

	static propTypes = {
		updateResponse: PropTypes.oneOfType([
			PropTypes.object,
			PropTypes.array,
		]),
		clearResponse: PropTypes.func,
		showAlert: PropTypes.string,
		showSuccessAlert: PropTypes.string,
	}

	alertOptions = {
		offset: 14,
		position: 'top right',
		theme: 'dark',
		time: 10000,
		transition: 'fade'
	}

	constructor(props) {
		super(props)
		this.msg = {}
	}

	componentDidMount() {
		if (this.props.showAlert) {
			this.showErrorAlert(this.props.showAlert)
		}
		if (this.props.showSuccessAlert) {
			this.showSuccessAlert(this.props.showSuccessAlert)
		}
	}

	componentDidUpdate() {
		const { updateResponse } = this.props
		if (Array.isArray(updateResponse)) {
			updateResponse.forEach((elem) => {
				if (elem.error) {
					this.showErrorAlert(elem.error)
					this.props.clearResponse()
				}
				if (elem.success || elem.status) {
					this.showSuccessAlert(elem.message)
					this.props.clearResponse()
				}
			})
		}

		if (updateResponse) {
			if (updateResponse.error) {
				this.showErrorAlert(updateResponse.error)
				this.props.clearResponse()
			}
			if (updateResponse.success || updateResponse.status) {
				this.showSuccessAlert(updateResponse.message)
				this.props.clearResponse()
			}
		}
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
	}

	render() {
		return (
			<div>
				<AlertContainer
					ref={(a) => {
						this.msg = a
						return this.msg
					}}
					{...this.alertOptions}
				/>
			</div>
		)
	}
}

export default Alert
