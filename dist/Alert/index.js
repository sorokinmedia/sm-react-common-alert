'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAlert = require('react-alert');

var _reactAlert2 = _interopRequireDefault(_reactAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = function (_Component) {
	_inherits(Alert, _Component);

	function Alert() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Alert);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.alertOptions = {
			offset: 14,
			position: 'top right',
			theme: 'dark',
			time: 10000,
			transition: 'fade'
		}, _this.showSuccessAlert = function (text) {
			_this.msg.show(_react2.default.createElement(
				'span',
				{ className: 'text-green' },
				text
			), {
				time: 5000,
				type: 'success',
				icon: _react2.default.createElement('i', { className: 'icon fa' })
			});
		}, _this.showErrorAlert = function (text) {
			_this.msg.show(_react2.default.createElement(
				'span',
				{ className: 'text-red' },
				text
			), {
				time: 100000,
				type: 'error',
				icon: _react2.default.createElement('i', { className: 'icon fa fa-ban' })
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Alert, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.showAlert) {
				this.showErrorAlert(this.props.showAlert);
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var updateResponse = this.props.updateResponse;

			if (updateResponse) {
				// error
				if (updateResponse.error) {
					this.showErrorAlert(updateResponse.error || updateResponse.message);
					this.props.clearResponse();
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_reactAlert2.default, _extends({
					ref: function ref(a) {
						_this2.msg = a;
						return _this2.msg;
					}
				}, this.alertOptions))
			);
		}
	}]);

	return Alert;
}(_react.Component);

Alert.propTypes = {
	updateResponse: _propTypes2.default.object,
	clearResponse: _propTypes2.default.func,
	showAlert: _propTypes2.default.string
};

exports.default = Alert;