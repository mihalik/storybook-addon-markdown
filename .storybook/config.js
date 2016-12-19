import React from 'react';
import {configure, setAddon} from '@kadira/storybook';
import {addWithMarkdown} from '../src';

setAddon({addWithMarkdown: addWithMarkdown});

configure(function () {
  require('../example/story');
}, module);
