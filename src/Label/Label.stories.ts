import { Meta, StoryObj } from "@storybook/react";

import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  component: Label,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "This is a label",
    htmlFor: "unsure",
  },
};
