import { Meta, StoryObj } from "@storybook/react";

import Collapsible from "./Collapsible";

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {
    title: "Title",
    children: "Body!",
  },
};
