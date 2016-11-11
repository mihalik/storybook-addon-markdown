'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownDecorator = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.addWithMarkdown = addWithMarkdown;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkdownDecorator = exports.MarkdownDecorator = function (_React$Component) {
  (0, _inherits3.default)(MarkdownDecorator, _React$Component);

  function MarkdownDecorator() {
    (0, _classCallCheck3.default)(this, MarkdownDecorator);
    return (0, _possibleConstructorReturn3.default)(this, (MarkdownDecorator.__proto__ || (0, _getPrototypeOf2.default)(MarkdownDecorator)).apply(this, arguments));
  }

  (0, _createClass3.default)(MarkdownDecorator, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.channel.emit('addon-markdown/story-change', this.props.markdown);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.story !== this.props.story) {
        this.props.channel.emit('addon-markdown/story-change', nextProps.markdown);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.story();
    }
  }]);
  return MarkdownDecorator;
}(_react2.default.Component);

exports.default = function (markdown) {
  return function (story) {
    return _react2.default.createElement(MarkdownDecorator, { story: story, markdown: markdown, channel: _storybookAddons2.default.getChannel() });
  };
};

function addWithMarkdown(name, markdown, story) {
  this.add(name, function () {
    return _react2.default.createElement(MarkdownDecorator, { story: story, markdown: markdown, channel: _storybookAddons2.default.getChannel() });
  });
}