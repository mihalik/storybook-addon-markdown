import React from 'react';
import {configure, setAddon} from '@kadira/storybook';
import MarkdownAddon from '../src';

setAddon(MarkdownAddon);

configure(function () {
  require('../example/story');
}, module);
