import React from 'react';
import marked from 'marked';
import '!style!css!github-markdown-css/github-markdown.css';

import reactPreview from './reactPreview';

const styles = {
  base: {
    boxSizing: 'border-box',
    maxWidth: 980,
    padding: 45,
  },
};

export default class MarkdownDisplay extends React.Component {
  render () {
    const {markdown, context, primary} = this.props;
    if (!markdown) {
      return null;
    }
    const html = marked(reactPreview(markdown, primary, context));
    return (
      <div style={styles.base} className="markdown-body" dangerouslySetInnerHTML={{__html: html}} />
    );
  }
}
