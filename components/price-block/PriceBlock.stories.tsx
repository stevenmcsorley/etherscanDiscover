// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import PriceBlock from './PriceBlock';
import priceblockData from './PriceBlock.testdata';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Price Block',
  component: PriceBlock,
} as ComponentMeta<typeof PriceBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PriceBlock> = (args) => <PriceBlock {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
price: priceblockData[0].price,
timestamp: priceblockData[0].timestamp,
};