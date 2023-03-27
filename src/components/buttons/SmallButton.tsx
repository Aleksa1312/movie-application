import { FC } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
}

const SmallButton: FC<ButtonProps> = (props) => {
    return (
        <button
            className={`${props.className} flex flex-row items-center justify-around rounded-sm px-2 py-1 font-semibold`}
        >
            {props.children}
        </button>
    );
};

export default SmallButton;
