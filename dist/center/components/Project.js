'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/project.css');

var _mbudget = require('../styles/images/mbudget.jpg');

var _mbudget2 = _interopRequireDefault(_mbudget);

var _eCommerce = require('../styles/images/e-commerce.jpg');

var _eCommerce2 = _interopRequireDefault(_eCommerce);

var _heroku = require('../styles/images/heroku.png');

var _heroku2 = _interopRequireDefault(_heroku);

var _github = require('../styles/images/github.png');

var _github2 = _interopRequireDefault(_github);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_Component) {
  _inherits(Project, _Component);

  function Project() {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
  }

  _createClass(Project, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'project', className: 'project' },
        _react2.default.createElement(
          'h1',
          null,
          'Portfolio'
        ),
        _react2.default.createElement(
          'div',
          { className: 'grid-container' },
          _react2.default.createElement(
            'div',
            { className: 'item 1' },
            _react2.default.createElement('img', { className: 'snapshot', src: _mbudget2.default }),
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/danielnmai/budget-webclient', target: '_blank' },
              _react2.default.createElement('img', { className: 'logo', src: _github2.default })
            ),
            _react2.default.createElement(
              'a',
              { href: 'http://mbudget.herokuapp.com/', target: '_blank' },
              _react2.default.createElement('img', { className: 'logo', src: _heroku2.default })
            ),
            _react2.default.createElement(
              'p',
              null,
              'mBudget is a personal finance tool that can give you a typical budget based on your salary and location. Built on Ruby on Rails.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'item 2' },
            _react2.default.createElement('img', { className: 'snapshot', src: _eCommerce2.default }),
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/danielnmai/mini-capstone', target: '_blank' },
              _react2.default.createElement('img', { className: 'logo', src: _github2.default })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://e-commerce-mini-app.herokuapp.com/', target: '_blank' },
              _react2.default.createElement('img', { className: 'logo', src: _heroku2.default })
            ),
            _react2.default.createElement(
              'p',
              null,
              'A fully functional Ruby on Rails e-commerce app with RESTful routes, complete cart and customer session functions.'
            )
          )
        )
      );
    }
  }]);

  return Project;
}(_react.Component);

exports.default = Project;