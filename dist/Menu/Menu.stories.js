import React from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import MenuButton from "./MenuButton"; // Import the MenuButton component
import Button from "../Button/Button";
const meta = {
    component: Menu,
    tags: ["autodocs"],
};
export default meta;
const Template = (args) => (React.createElement(Menu, { ...args },
    React.createElement(MenuButton, null,
        React.createElement(Button, null, "Open me!")),
    React.createElement(MenuItem, { label: "Tab 1", href: "", ...args }),
    React.createElement(MenuItem, { label: "Tab 2", href: "", ...args }),
    React.createElement(MenuItem, { label: "Tab 3", href: "", ...args })));
export const Default = Template.bind({});
export const Primary = Template.bind({});
Primary.args = { primary: true };
//# sourceMappingURL=Menu.stories.js.map