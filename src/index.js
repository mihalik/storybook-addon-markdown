import React from 'react';
import addons from "@kadira/storybook-addons";
import marked from 'marked';
import reactPreview from './reactPreview';

export class MarkdownDecorator extends React.Component {

  renderDoc() {
    const {markdown, context} = this.props;
    return marked(reactPreview(markdown, context));
  }

  componentWillMount() {
    this.props.channel.emit('addon-markdown/doc-change', this.renderDoc());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.story !== this.props.story) {
      this.props.channel.emit('addon-markdown/doc-change', this.renderDoc());
    }
  }

  render() {
    const {story} = this.props;
    return story();
  }
}

export default (markdown, context) => (story) => (
  <MarkdownDecorator story={story} context={context} markdown={markdown} channel={addons.getChannel()} />
);

export function addWithMarkdown(name, markdown, story, context) {
  this.add(name, () => {
    return <MarkdownDecorator story={story} context={context} markdown={markdown} channel={addons.getChannel()} />;
  });
}
