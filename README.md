**NOTE: This module is under active development**

# Storybook Markdown Addon

A React Storybook addon to show documentation in markdown format.

![](https://cldup.com/_q_eaktFjS.png)

## Usage

Install the following module:
**NOTE: This module will move to NPM once API has stabilized**

```sh
npm i -D mihalik/storybook-addon-markdown
```

Set the addon in the place you configure storybook:

```js
import React from 'react';
import {configure, setAddon} from '@kadira/storybook';
import MarkdownAddon from 'storybook-addon-markdown';

setAddon(MarkdownAddon);

configure(function () {
  require('../example/story');
}, module);

```

Then add a story for your markdown in stories.

```js
import Button from './Button';
const context = {Button};

const details = `
# The button component

### features
* One
* Two
* Three
`;

storiesOf('ButtonSimple')
  .addMarkdown('Documentation', doc, Button, context)
  .add(
    'simple usage',
    () => <ButtonSimple label="The Button" onClick={action('onClick')} />,
  );
```

## `addMarkdown()` method
* storyName - The name of the story
* markdown - The markdown to display
* primaryComponent - The React component the story is about.
  * This is used to replace `#PROPS#` within your markdown with the props of the component
* context - An object that contains all the components necessary to render the components in your markdown file.

## Markdown extensions

Use `preview` language type to display a preview of the component.  Shows the source code used to render the preview.  Use `inline` to render the component without showing the source code.  Use `#PROPS#` to display the props table.

*See example directory for examples*
