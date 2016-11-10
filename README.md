**NOTE: This module is under active development**

# Storybook Markdown Addon

A React Storybook addon to show documentation in markdown format.

![](https://cldup.com/BqlCR8pOBG.png)

## Usage

Install the following module:
**NOTE: This module will move to NPM once API has stabilized**

```sh
npm i -D mihalik/storybook-addon-markdown
```

Create an `addons.js` file within your storybook config directory:

```js
import '@kadira/storybook/addons';
import 'storybook-addon-markdown/register';

```

Then add a decorator to your stories.

```js
const details = `
# The button component

### features
* One
* Two
* Three
`;

storiesOf('ButtonSimple')
  .addDecorator(markdownDecorator(details))
  .add(
    'simple usage',
    () => <ButtonSimple label="The Button" onClick={action('onClick')} />,
  );
```

> Have a look at [this example](example/story.js) stories to see the example usage.
