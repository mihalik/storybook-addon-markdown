'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = generatePreview;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _buble = require('buble');

var _propTypes = require('./propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Need to make a nice preview component that can show/hide source and is
// not just a terrible table.  Also, markdown interperates indented things as code blocks
var renderPreview = function renderPreview(component, codeDisplay) {
  return '\n' + component + '\n<br />\n' + codeDisplay + '\n';
};

var renderComponent = function renderComponent(code, context) {
  context = (0, _extends3.default)({}, context, { React: _react2.default });
  // Make a string that sets a local variable for all context passed in.
  var vars = (0, _keys2.default)(context).map(function (k) {
    return 'var ' + k + ' = context[\'' + k + '\'];';
  });
  // Transpile using buble (mostly to eval jsx)
  var transformedCode = (0, _buble.transform)(code).code;
  // Create a new function that evaluates the context and returns the
  // react component.
  var newCode = vars.join('\n') + '\nreturn ' + transformedCode;
  // If not starts with '<' then we assume this is a function we should
  // be calling.
  if (!code.trim().startsWith('<')) {
    newCode = newCode + '();';
  }
  var f = Function('context', newCode);
  // Make some HTML from the component.
  return _server2.default.renderToString(f(context));
};

// replaces ```preview blocks with HTML.
function generatePreview(markdown, primary, context) {
  // If primary component is not provided, then we are not gonna eval anymore.
  if (primary === undefined) {
    return markdown;
  }
  markdown = markdown.replace('#PROPS#', (0, _propTypes2.default)(primary));
  // If context is not provided, then we are not gonna eval anymore.
  if (context === undefined) {
    return markdown;
  }
  // Match all code blocks in markdown.
  var codeBlockRegex = /^\`{3}([\S]+)?\n([\s\S]+?)\n\`{3}/mg;
  var match = void 0;
  while (match = codeBlockRegex.exec(markdown)) {
    if (match[1] === 'preview') {
      var component = match[2];
      var newCode = match[0].replace('```preview', '```js');
      markdown = markdown.replace(match[0], renderPreview(renderComponent(component, context), newCode));
    }
    if (match[1] === 'inline') {
      var _component = match[2];
      markdown = markdown.replace(match[0], renderComponent(_component, context));
    }
  }
  return markdown;
}
