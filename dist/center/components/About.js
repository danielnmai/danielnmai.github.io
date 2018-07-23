'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/about.css');

var _profile_pic = require('../styles/images/profile_pic.jpg');

var _profile_pic2 = _interopRequireDefault(_profile_pic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'about', className: 'about' },
        _react2.default.createElement(
          'div',
          { className: 'bio' },
          _react2.default.createElement(
            'h1',
            null,
            'About'
          ),
          _react2.default.createElement('img', { id: 'profile_pic', src: _profile_pic2.default, alt: 'profile_pic' }),
          _react2.default.createElement(
            'h4',
            null,
            'Welcome to my website!'
          ),
          _react2.default.createElement(
            'p',
            null,
            'I am a Software Developer with computer science degree and experience with both hardware and software technologies. I have a true passion for solving human problems. In the past, I achieved this through providing hardware solutions. In the present, I write elegant code to make Internet a better place for people.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Today, most of my personal projects are done with ',
            _react2.default.createElement(
              'b',
              null,
              ' React, Redux, Mobx, Node.js, and webpack.'
            ),
            ' Even though I consider myself a full stack developer, I enjoy working on front end, where I love to see my code having an direct impact on users. Yet I did back end stuff from time to time, most recently wrote a Java command to redact around 17 millions EU profiles for a company, due to GDPR policy requirements.  '
          ),
          _react2.default.createElement(
            'p',
            null,
            'In my free time, I enjoy spending time with my wife, working out, biking on my cross bike, playing computer games and reading books. '
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'skills' },
          _react2.default.createElement(
            'h1',
            null,
            'Skills'
          ),
          _react2.default.createElement(
            'div',
            { className: 'skill-item' },
            _react2.default.createElement(
              'h3',
              null,
              'Languages'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Javascript'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Ruby'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Java'
              ),
              _react2.default.createElement(
                'li',
                null,
                'HTML5/CSS3'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'skill-item' },
            _react2.default.createElement(
              'h3',
              null,
              'Frameworks / Libraries'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'React-Redux'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Rails'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Material-UI'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Node.js'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'skill-item' },
            _react2.default.createElement(
              'h3',
              null,
              'Database'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'PostgreSQL'
              ),
              _react2.default.createElement(
                'li',
                null,
                'MySQL'
              ),
              _react2.default.createElement(
                'li',
                null,
                'ActiveRecord'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'skill-item' },
            _react2.default.createElement(
              'h3',
              null,
              'Other'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Git/Github'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Heroku'
              ),
              _react2.default.createElement(
                'li',
                null,
                'webpack'
              ),
              _react2.default.createElement(
                'li',
                null,
                'AJAX'
              ),
              _react2.default.createElement(
                'li',
                null,
                'RESTful APIs'
              ),
              _react2.default.createElement(
                'li',
                null,
                'JSX'
              )
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;