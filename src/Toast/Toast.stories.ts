import { Meta, StoryObj } from "@storybook/react";

import Avatar from "./Toast";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    message: "Failure",
    type: "warning",
    duration: 2000,
    isVisible: true,
    setIsVisible: () => {},
  },
};
