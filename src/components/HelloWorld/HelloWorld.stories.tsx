import React from 'react';

import { STORYBOOK_CONTEXT } from 'constants/storybookContexts';

import { HelloWorld } from './HelloWorld';

export default {
  title: `${STORYBOOK_CONTEXT.COMPONENTS}/HelloWorld`,
  component: HelloWorld,
};

const Template = () => <HelloWorld />;

export const Default = Template.bind({});
