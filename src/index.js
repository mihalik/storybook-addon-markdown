import React from 'react';
import {Story} from "@kadira/storybook-addons";

import MarkdownDisplay from './MarkdownDisplay';

export default {
  addMarkdown(storyName, markdown, primary, context) {
    return this.add(storyName, () => {
      return (
        <MarkdownDisplay markdown={markdown} primary={primary} context={context} />
      );
    });
  }
};
