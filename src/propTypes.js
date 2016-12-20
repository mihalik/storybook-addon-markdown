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

function generatePropType(type) {
  var values;
  if (Array.isArray(type.value)) {
    values = '(' +
      type.value.map(function(typeValue) {
        return typeValue.name || typeValue.value;
      }).join(',') +
      ')';
  } else {
    values = type.value;
  }

  return type.name + (values ? values: '');
}

function generatePropDefaultValue(value) {
  return '`' + value.value + '`';
}

function generateProp(propName, prop) {
  return (
    '|`' + propName + '`|' +
    (prop.type ? generatePropType(prop.type) : '') + '|' +
    (prop.required ? 'yes' : 'no') + '|' +
    (prop.defaultValue ? generatePropDefaultValue(prop.defaultValue) : '') + '|' +
    (prop.description ? prop.description : '') + '|'
  );
}

function generateProps(props) {
  var title = '|name|type|required|default|description|\n|---|---|---|---|---|\n';
  if (!props) {
    return title;
  }
  return (
    title +
    Object.keys(props).sort().map(function(propName) {
      return generateProp(propName, props[propName]);
    }).join('\n')
  );
}

function generateMarkdown(reactAPI) {
  const docgen = reactAPI.__docgenInfo;
  if (docgen && docgen.props && Object.keys(docgen.props).length > 0) {
    return generateProps(reactAPI.__docgenInfo.props);
  } else {
    return generateProps(null);
  }
}

module.exports = generateMarkdown;
