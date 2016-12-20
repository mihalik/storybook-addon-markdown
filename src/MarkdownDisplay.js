import React from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
import '!style!css!github-markdown-css/github-markdown.css';
import '!style!css!highlight.js/styles/github.css';

import codePreview from './codePreview';

const styles = {
  base: {
    boxSizing: 'border-box',
    maxWidth: 980,
    padding: 45,
  },
};

marked.setOptions({
  highlight: (code) => highlight.highlightAuto(code).value,
});

export default class MarkdownDisplay extends React.Component {
  render () {
    const {markdown, context, primary} = this.props;
    if (!markdown) {
      return null;
    }
    const html = marked(codePreview(markdown, primary, context));
    return (
      <div style={styles.base} className="markdown-body" dangerouslySetInnerHTML={{__html: html}} />
    );
  }
}
