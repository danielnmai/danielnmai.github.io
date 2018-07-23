'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavBar = require('./NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _TypedString = require('./TypedString');

var _TypedString2 = _interopRequireDefault(_TypedString);

require('./styles/landing.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Landing = function Landing(props) {
  return _react2.default.createElement(
    'div',
    { id: 'home', className: 'landing' },
    _react2.default.createElement(
      'div',
      { className: 'title' },
      _react2.default.createElement(
        'h1',
        null,
        'Daniel Mai'
      ),
      _react2.default.createElement(_TypedString2.default, null)
    )
  );
};

exports.default = Landing;