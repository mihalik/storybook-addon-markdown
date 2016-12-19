import React from 'react';
import marked from 'marked';
import '!style!css!github-markdown-css/github-markdown.css';

const styles = {
  base: {
    boxSizing: 'border-box',
    maxWidth: 980,
    padding: 45,
  },
};

export default class DocPanel extends React.Component {
  state = {markdown: null};
  constructor(props) {
    super(props);
    this.props.channel.on('addon-markdown/story-change', (markdown) => {
      this.setState({markdown});
    });
  }
  render () {
    const {markdown} = this.state;
    if (!markdown) {
      return null;
    }
    const html = marked(markdown);
    return (
      <div style={styles.base} className="markdown-body" dangerouslySetInnerHTML={{__html: html}} />
    );
  }
}
