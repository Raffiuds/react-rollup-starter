import { STORYBOOK_CONTEXT } from 'constatns/storybookContexts';
import React from 'react';
import { HelloWorld } from './HelloWorld';

export default {
  title: `${STORYBOOK_CONTEXT.COMPONENTS}/HelloWorld`,
  component: HelloWorld,
};

const Template = () => <HelloWorld />;

export const Default = Template.bind({});
