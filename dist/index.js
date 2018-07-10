'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var AlertContainer = _interopDefault(require('react-alert'));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Alert = function (_Component) {
	inherits(Alert, _Component);

	function Alert(props) {
		classCallCheck(this, Alert);

		var _this = possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

		_this.alertOptions = {
			offset: 14,
			position: 'top right',
			theme: 'dark',
			time: 10000,
			transition: 'fade'
		};

		_this.showSuccessAlert = function (text) {
			_this.msg.show(React__default.createElement(
				'span',
				{ className: 'text-green' },
				text
			), {
				time: 5000,
				type: 'success',
				icon: React__default.createElement('i', { className: 'icon fa' })
			});
		};

		_this.showErrorAlert = function (text) {
			_this.msg.show(React__default.createElement(
				'span',
				{ className: 'text-red' },
				text
			), {
				time: 100000,
				type: 'error',
				icon: React__default.createElement('i', { className: 'icon fa fa-ban' })
			});
		};

		_this.msg = {};
		return _this;
	}

	createClass(Alert, [{
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
					this.showErrorAlert(updateResponse.error);
					this.props.clearResponse();
				}
				if (updateResponse.success) {
					this.showSuccessAlert(updateResponse.message);
					this.props.clearResponse();
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React__default.createElement(
				'div',
				null,
				React__default.createElement(AlertContainer, _extends({
					ref: function ref(a) {
						_this2.msg = a;
						return _this2.msg;
					}
				}, this.alertOptions))
			);
		}
	}]);
	return Alert;
}(React.Component);

Alert.propTypes = {
	updateResponse: propTypes.object,
	clearResponse: propTypes.func,
	showAlert: propTypes.string
};

module.exports = Alert;
