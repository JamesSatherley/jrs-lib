import { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    sections: [
      {
        title: "Title 1",
        content: "Content 1",
      },
      {
        title: "Title 2",
        content: "Content 2",
      },
      {
        title: "Title 3",
        content: "Content 3",
      },
    ],
  },
};
