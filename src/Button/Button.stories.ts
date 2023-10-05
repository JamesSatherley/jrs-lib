import { Meta, StoryObj } from "@storybook/react";

import {Button} from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click Me!",
  },
};

export const Primary: Story = {
  args: {
    children: "Click Me!",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "Click Me!",
    secondary: true,
  },
};
