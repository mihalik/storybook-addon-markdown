import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from './Button';
import readme from '!raw!../README.md';
import doc from '!raw!./doc.md';
const context = {Button};

const buttonDocTwo = `
# Second markdown

|Test|Header|
|-|-|
|One|Two|

\`\`\`preview
<Button label="Second Inline Button" />
\`\`\`
`;

storiesOf('Button Readme')
  .addMarkdown('Documentation', readme)
  .add(
    'simple usage',
    () => <Button label="The Button" onClick={action('onClick')} />,
  )
  .add(
    'another usage',
    () => <Button label="Another Button" onClick={action('another onClick')} />,
  );

storiesOf('Button Inline')
  .addMarkdown('Documentation', doc, Button, context)
  .add(
    'simple usage',
    () => <Button label="The Button" onClick={action('onClick')} />,
  );

storiesOf('Multiple Documents')
  .addMarkdown('First markdown', doc, Button, context)
  .addMarkdown('Second markdown', buttonDocTwo, Button, context);
