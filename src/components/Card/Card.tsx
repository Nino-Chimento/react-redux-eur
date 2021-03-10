import React, { FC } from "react";
import Styled from "styled-components";
export interface CardProps {
  title: string;
  description: string;
  price: number;
}

const StyledDescription = Styled.div`
  height:30px;
  white-space: nowrap;
  margin-bottom:10px;
  width:90%;
  margin:auto;
  overflow:hidden;
`;

export const Card: FC<CardProps> = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <StyledDescription>{props.description}</StyledDescription>
      <div>{props.price}</div>
    </div>
  );
};
