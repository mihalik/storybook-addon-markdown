import React from 'react';
import addons from "@kadira/storybook-addons";

export class MarkdownDecorator extends React.Component {

  componentWillMount() {
    this.props.channel.emit('addon-markdown/story-change', this.props.markdown);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.story !== this.props.story) {
      this.props.channel.emit('addon-markdown/story-change', nextProps.markdown);
    }
  }

  render() {
    return this.props.story();
  }
}

export default (markdown) => (story) => (
  <MarkdownDecorator story={story} markdown={markdown} channel={addons.getChannel()} />
);

export function addWithMarkdown(name, markdown, story) {
  this.add(name, () => {
    return <MarkdownDecorator story={story} markdown={markdown} channel={addons.getChannel()} />;
  });
}
