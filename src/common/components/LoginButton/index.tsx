import React from "react";

interface ButtonProps {
    children: any;
    onClick: () => void;
    className: string;
}

const LoginButton = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            type="button"
            className={props.className}
        >
            {props.children}
        </button>
    );
};
export default LoginButton;
