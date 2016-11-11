import React from 'react';
import addons from '@kadira/storybook-addons';
import {setAddon} from '@kadira/storybook';

import MarkdownPanel from './MarkdownPanel';

const ADDON_ID = 'storybook-addon-markdown';
const PANEL_ID = `${ADDON_ID}/markdown-panel`;

addons.register(ADDON_ID, (api) => {
  const channel = addons.getChannel();
  addons.addPanel(PANEL_ID, {
    title: 'Docs',
    render: () => {
      return <MarkdownPanel channel={channel} api={api} />;
    },
  });
});
