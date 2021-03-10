import React, { FC } from "react";
import styled from "styled-components";

export interface InputProps {
  label?: string;
  placeholder?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: ((event: React.FocusEvent<HTMLInputElement>) => void) & void;
  required?: boolean;
  errorMessage?: string;
  type?: string;
  value?: string | number;
  minlength?: string | number;
  maxlength?: string | number;
  min?: string | number;
  max?: string | number;
  name?: string;
}

const StyledInput = styled.input<InputProps>`
  height: auto;
  padding: 8px 10px;
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  font-family: "Lato", sans-serif;
  margin-top: 5px;
`;
const StyledLabel = styled.label`
  font-family: inherit;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 14px;
`;

export const Input: FC<InputProps> = (props: InputProps) => {
  return (
    <>
      <StyledLabel>
        {props?.label}
        {props.required ? "*" : ""}{" "}
      </StyledLabel>
      <StyledInput
        name={props.name}
        type={props.type}
        minlength={props.minlength}
        maxlength={props.maxlength}
        min={props.min}
        max={props.max}
        placeholder={props.placeholder}
        value={props.value}
        onFocus={props.handleFocus}
        onChange={props.handleChange}
      />
    </>
  );
};
