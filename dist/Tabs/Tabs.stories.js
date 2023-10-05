import React from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";
const meta = {
    component: Tabs,
    tags: ["autodocs"],
};
export default meta;
const Template = (args) => (React.createElement(Tabs, { ...args },
    React.createElement(Tab, { label: "Tab 1" }, "Content for Tab 1"),
    React.createElement(Tab, { label: "Tab 2" }, "Content for Tab 2"),
    React.createElement(Tab, { label: "Tab 3" }, "Content for Tab 3")));
export const Default = Template.bind({});
export const Primary = Template.bind({});
Primary.args = { primary: true };
//# sourceMappingURL=Tabs.stories.js.map