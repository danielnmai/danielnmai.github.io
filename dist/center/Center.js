'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _About = require('./components/About');

var _About2 = _interopRequireDefault(_About);

var _Project = require('./components/Project');

var _Project2 = _interopRequireDefault(_Project);

var _Contact = require('./components/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

require('./styles/center.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Center = function (_Component) {
  _inherits(Center, _Component);

  function Center() {
    _classCallCheck(this, Center);

    return _possibleConstructorReturn(this, (Center.__proto__ || Object.getPrototypeOf(Center)).apply(this, arguments));
  }

  _createClass(Center, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'center' },
        _react2.default.createElement(_About2.default, null),
        _react2.default.createElement(_Project2.default, null),
        _react2.default.createElement(_Contact2.default, null)
      );
    }
  }]);

  return Center;
}(_react.Component);

exports.default = Center;