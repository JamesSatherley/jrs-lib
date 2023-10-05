import { AiFillCaretDown, AiFillLike, AiOutlineUser } from "react-icons/ai";
import IconButton from "./IconButton";
const meta = {
    component: IconButton,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        icon: AiOutlineUser,
    },
};
export const Primary = {
    args: {
        icon: AiFillCaretDown,
        primary: true,
    },
};
export const Secondary = {
    args: {
        icon: AiFillLike,
        secondary: true,
    },
};
//# sourceMappingURL=IconButton.stories.js.map