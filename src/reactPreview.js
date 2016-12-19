import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {transform} from 'buble';

const renderComponent = function(code, context) {
  context = {...context, React};
  // Make a string that sets a local variable for all context passed in.
  const vars = Object.keys(context).map((k) => {
    return `var ${k} = context['${k}'];`;
  });
  // Transpile using buble (mostly to eval jsx)
  const transformedCode = transform(code).code;
  // Create a new function that evaluates the context and returns the
  // react component.
  var f = Function('context', vars.join('\n') + 'return ' + transformedCode);
  // Make some HTML from the component.
  return ReactDOMServer.renderToString(f(context));
}

// replaces ```preview blocks with HTML.
export default function generatePreview(markdown, context) {
  // If context is not provided, then we are not gonna try
  // and eval any of the code.
  if (context === undefined) {
    return markdown;
  }
  // Match all code blocks in markdown.
  const codeBlockRegex = /^\`{3}([\S]+)?\n([\s\S]+?)\n\`{3}/mg;
  let match;
  while (match = codeBlockRegex.exec(markdown)) {
    if(match[1] === 'preview') {
      const component = match[2];
      markdown = markdown.replace(match[0], renderComponent(component, context));
    }
  }
  return markdown;
}
