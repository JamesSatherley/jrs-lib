import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import Menu from "./Menu";
import MenuItem from "./MenuItem";
import MenuButton from "./MenuButton"; // Import the MenuButton component
import Button from "../Button/Button";

const meta: Meta<typeof Menu> = {
  component: Menu,
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn = (args) => (
  <Menu {...args}>
    <MenuButton>
      <Button>Open me!</Button>
    </MenuButton>
    <MenuItem label="Tab 1" href="" {...args} />
    <MenuItem label="Tab 2" href="" {...args} />
    <MenuItem label="Tab 3" href="" {...args} />
  </Menu>
);

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = { primary: true };
