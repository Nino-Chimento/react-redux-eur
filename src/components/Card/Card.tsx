import React, { FC } from "react";

export interface CardProps {
  title: string;
  description: string;
  price: number;
}

export const Card: FC<CardProps> = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <div>{props.description}</div>
      <span>{props.price}</span>
    </div>
  );
};
