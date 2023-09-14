import { Meta, StoryObj } from "@storybook/react";

import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    name: "John F Kenedy",
    colour: "#333333",
    bg: "#dddddd",
    scale: 1.5,
  },
};
