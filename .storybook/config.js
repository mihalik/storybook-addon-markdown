import React from 'react';
import {configure} from '@kadira/storybook';

configure(function () {
  require('../example/story');
}, module);
