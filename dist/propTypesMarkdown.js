/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * DM: This was based on the file here:  https://github.com/reactjs/react-docgen/blob/master/example/generateMarkdown.js
 * but has been modified to output github-flavored markdown and output props as
 * tables rather than lists.
 */
"use strict";

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateTitle(name) {
  var title = '`' + name + '`';
  return title + '\n===\n';
}

function generateDesciption(description) {
  return description + '\n';
}

function generatePropType(type) {
  var values;
  if (Array.isArray(type.value)) {
    values = '(' + type.value.map(function (typeValue) {
      return typeValue.name || typeValue.value;
    }).join('|') + ')';
  } else {
    values = type.value;
  }

  return type.name + (values ? values : '');
}

function generatePropDefaultValue(value) {
  return '`' + value.value + '`';
}

function generateProp(propName, prop) {
  return '|`' + propName + '`|' + (prop.type ? generatePropType(prop.type) : '') + '|' + (prop.required ? 'yes' : 'no') + '|' + (prop.defaultValue ? generatePropDefaultValue(prop.defaultValue) : ' ') + '|' + (prop.description ? prop.description : ' ') + '|';
}

function generateProps(props) {
  var title = '|name|type|required|default|description|\n|---|---|---|---|---|\n';
  if (!props) {
    return title;
  }
  return title + (0, _keys2.default)(props).sort().map(function (propName) {
    return generateProp(propName, props[propName]);
  }).join('\n');
}

function generateMarkdown(reactAPI) {
  var markdownString =
  // generateTitle(reactAPI.displayName) + '\n' +
  // generateDesciption(reactAPI.description) + '\n' +
  generateProps(reactAPI.__docgenInfo.props);

  return markdownString;
}

module.exports = generateMarkdown;