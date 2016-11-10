import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import markdownDecorator from '../src';

import Button from './Button';
import readme from '!raw!../README.md';

const inline = `
# Test markdown

### Features
* One
* Two
* Three
`;

storiesOf('Button Readme')
  .addDecorator(markdownDecorator(readme))
  .add(
    'simple usage',
    () => <Button label="The Button" onClick={action('onClick')} />,
  )
  .add(
    'another usage',
    () => <Button label="Another Button" onClick={action('another onClick')} />,
  );

storiesOf('Button Inline')
  .addDecorator(markdownDecorator(inline))
  .add(
    'simple usage',
    () => <Button label="The Button" onClick={action('onClick')} />,
  );
