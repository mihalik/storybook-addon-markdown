import React from 'react';
import '!style!css!github-markdown-css/github-markdown.css';

import reactPreview from './reactPreview';

const styles = {
  base: {
    boxSizing: 'border-box',
    maxWidth: 980,
    padding: 45,
  },
};

export default class DocPanel extends React.Component {
  state = {html: null};
  constructor(props) {
    super(props);
    props.channel.on('addon-markdown/doc-change', (html) => {
      this.setState({html});
    });
  }
  render () {
    const {html} = this.state;
    if (!html) {
      return null;
    }
    return (
      <div style={styles.base} className="markdown-body" dangerouslySetInnerHTML={{__html: html}} />
    );
  }
}
