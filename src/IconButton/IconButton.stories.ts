import { Meta, StoryObj } from "@storybook/react";

import { AiFillCaretDown, AiFillLike, AiOutlineUser } from "react-icons/ai";

import IconButton from "./IconButton";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: AiOutlineUser,
  },
};

export const Primary: Story = {
  args: {
    icon: AiFillCaretDown,
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    icon: AiFillLike,
    secondary: true,
  },
};
