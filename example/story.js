import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import markdownDecorator, {addWithMarkdown} from '../src';

import Button from './Button';
import readme from '!raw!../README.md';

const inline = `
# Test markdown

### Features
* One
* Two
* Three

\`\`\`preview
<Button label="Inline Button" />
\`\`\`

\`\`\`js
<Button label="Inline Button" />
\`\`\`

\`\`\`preview
<Button label="Second Inline Button" />
\`\`\`
`;

const inlineSecond = `
# Second markdown

|Test|Header|
|-|-|
|One|Two|
`;

const context = {Button};

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
  .addDecorator(markdownDecorator(inline, context))
  .add(
    'simple usage',
    () => <Button label="The Button" onClick={action('onClick')} />,
  );

storiesOf('Button Empty')
  .addDecorator(markdownDecorator(''))
  .add(
    'simple usage',
    () => <Button label="The Button" onClick={action('onClick')} />,
  );

storiesOf('Button Different')
  .addWithMarkdown(
    'first markdown',
    inline,
    () => <Button label="The Button" onClick={action('onClick')} />,
    context,
  )
  .addWithMarkdown(
    'second markdown',
    inlineSecond,
    () => <Button label="The Button" onClick={action('onClick')} />,
    context,
  );
