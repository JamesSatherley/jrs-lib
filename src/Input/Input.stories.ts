import { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    name: "example",
    placeholder: "Enter text...",
  },
};

export const Primary: Story = {
  args: {
    name: "example",
    placeholder: "Enter text...",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    name: "example",
    placeholder: "Enter text...",
    secondary: true,
  },
};

export const Password: Story = {
  args: {
    name: "password",
    type: "password",
    secondary: true,
    placeholder: "Enter password...",
  },
};
