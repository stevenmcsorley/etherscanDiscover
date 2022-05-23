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
  last7days: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4172.svg",
  marketCap: "$786,902,749",
  price: "$0.0001204",
  sevenday: "72.26%",
  thirtyday: "100.00%",
  ticker: "TerraLUNA",
  tickerLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/4172.png",
  twentyFourhr: "8.01%",
  volume24hr: "$505,018,778"
};