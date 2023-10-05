import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Tabs } from "./Tabs";
import { Tab } from "./Tab";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn = (args) => (
  <Tabs {...args}>
    <Tab label="Tab 1">Content for Tab 1</Tab>
    <Tab label="Tab 2">Content for Tab 2</Tab>
    <Tab label="Tab 3">Content for Tab 3</Tab>
  </Tabs>
);

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = { primary: true };
