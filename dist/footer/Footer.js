'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles/footer.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  return _react2.default.createElement(
    'div',
    { className: 'footer' },
    _react2.default.createElement(
      'p',
      null,
      'Copyright @ DANIEL MAI - 2018 All Rights Reserved. '
    )
  );
};

exports.default = Footer;