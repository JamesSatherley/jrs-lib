import { Meta, StoryObj } from "@storybook/react";

import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
  },
};
