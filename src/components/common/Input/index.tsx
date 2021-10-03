import React, { CSSProperties, FC } from "react";

import { c } from "utils/c";

import css from "./Input.module.css";


interface InputProps {
    label?: string
    onChange?: (value: string) => void
    placeholder?: string
    fluid?: boolean
    className?: string
    style?: CSSProperties
}

const InputBase: FC<Omit<InputProps, "label">> = props => {
    const {
        placeholder,
        fluid,
        onChange,
        className,
        style
    } = props;
    
    return <input style={style}
                  onChange={(v: { target: { value: string } }) =>
                      onChange?.(v.target.value)}
                  placeholder={placeholder}
                  className={c(css.input, className, fluid && css.inputFluid )} />;
}; 

export const Input: FC<InputProps> = props => {
    const {
        label,
        ...mainProps
    } = props;
    
    return label ? <label>
        { label }
        <InputBase {...mainProps} />
    </label> : <InputBase {...mainProps} />;
};