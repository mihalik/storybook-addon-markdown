'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _MarkdownDisplay = require('./MarkdownDisplay');

var _MarkdownDisplay2 = _interopRequireDefault(_MarkdownDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  addMarkdown: function addMarkdown(storyName, markdown, primary, context) {
    return this.add(storyName, function () {
      return _react2.default.createElement(_MarkdownDisplay2.default, { markdown: markdown, primary: primary, context: context });
    });
  }
};