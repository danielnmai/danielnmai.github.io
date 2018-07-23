'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _desc, _value, _class2, _descriptor;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _mobx = require('mobx');

require('../styles/contact.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Contact = (0, _mobxReact.observer)(_class = (_class2 = function (_Component) {
  _inherits(Contact, _Component);

  function Contact(props) {
    _classCallCheck(this, Contact);

    var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));

    _initDefineProp(_this, 'formInput', _descriptor, _this);

    _this.handleNameChange = function (event) {
      _this.formInput.name = event.target.value;
    };

    _this.handleEmailChange = function (event) {
      _this.formInput.email = event.target.value;
    };

    _this.handleMessageChange = function (event) {
      _this.formInput.message = event.target.value;
    };

    _this.formInput = { formSubmitted: false, name: '', email: '', message: '' };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Contact, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      console.log('form is submitted');
      this.formInput.formSubmitted = true;
      console.log(this.formInput);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'contact', className: 'contact' },
        _react2.default.createElement(
          'h1',
          null,
          'Contact'
        ),
        _react2.default.createElement(
          'div',
          { className: 'body' },
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            _react2.default.createElement('input', { className: 'form-input', type: 'text', name: 'name', placeholder: 'Name', value: this.formInput.name, onChange: this.handleNameChange }),
            _react2.default.createElement('input', { className: 'form-input', type: 'text', name: 'email', placeholder: 'Email', value: this.formInput.email, onChange: this.handleEmailChange }),
            _react2.default.createElement('textarea', { className: 'form-input', type: 'text', name: 'message', placeholder: 'Message', value: this.formInput.message, onChange: this.handleMessageChange }),
            _react2.default.createElement('input', { className: 'form-input', id: 'submit-button', type: 'submit', value: 'Send Message' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'info' },
            _react2.default.createElement(
              'h3',
              null,
              'Daniel Mai'
            ),
            _react2.default.createElement(
              'p',
              null,
              ' Milpitas, California'
            ),
            _react2.default.createElement(
              'p',
              null,
              ' danielmai1728@gmail.com'
            )
          )
        )
      );
    }
  }]);

  return Contact;
}(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'formInput', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class2)) || _class;

var FormOutput = function FormOutput(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      'Form Output: '
    ),
    _react2.default.createElement(
      'p',
      null,
      'name: ',
      props.name
    ),
    _react2.default.createElement(
      'p',
      null,
      'email: ',
      props.email
    ),
    _react2.default.createElement(
      'p',
      null,
      'message: ',
      props.message
    )
  );
};

exports.default = Contact;