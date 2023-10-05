import Input from "./Input";
const meta = {
    component: Input,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        name: "example",
        placeholder: "Enter text...",
    },
};
export const Primary = {
    args: {
        name: "example",
        placeholder: "Enter text...",
        primary: true,
    },
};
export const Secondary = {
    args: {
        name: "example",
        placeholder: "Enter text...",
        secondary: true,
    },
};
export const Password = {
    args: {
        name: "password",
        type: "password",
        secondary: true,
        placeholder: "Enter password...",
    },
};
//# sourceMappingURL=Input.stories.js.map