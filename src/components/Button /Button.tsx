import React, { FC, ReactNode } from "react";
import styled from "styled-components";

export interface ButtonProps {
  handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  children: ReactNode;
  variant: "primary" | "secondary";
  disabled?: boolean;
  type?: "submit";
}

const StyledButton = styled.button<ButtonProps>`
  color: ${(buttonProps) =>
    buttonProps.variant === "primary" ? "#fff" : "#000"};
  background: ${(buttonProps) =>
    buttonProps.variant === "primary" ? "#000" : "#fff"};
  width: 100%;
  height: 100%;
  font-size: 14px;
  text-transform: none;
  font-family: "Lato", sans-serif;
  cursor: pointer;
`;

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <StyledButton
      type={props.type}
      disabled={props.disabled}
      onClick={props.handleClick}
      variant={props.variant}
    >
      {props.children}
    </StyledButton>
  );
};
