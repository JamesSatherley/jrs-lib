import { Meta, StoryObj } from "@storybook/react";

import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  component: Toast,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Primary: Story = {
  args: {
    message: "Failure",
    type: "warning",
    duration: 2000,
    isVisible: true,
    setIsVisible: () => {},
  },
};
