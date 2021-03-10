import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "../Button /Button";
import { Input } from "../Input/Input";

export interface FormCreateProps {
  handleFormLogInChange?: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  handleSubmitLogIn?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const StyledWrap = styled.div``;

const StyledTitle = styled.div`
  font-size: 22px;
  margin: 10px 0 10px 0;
`;

const StyledWrapInput = styled.div`
  margin: 10px 0 20px 0;
  width: 100%;
`;
const StyledWrapButton = styled.div`
  margin: 10px 0 0 0;
  height: 40px;
  width: 100%;
  text-transform: uppercase;
`;

const StyledWrapForm = styled.div`
  width: 100%;
`;

export const FormCreate: FC<FormCreateProps> = (props) => {
  return (
    <StyledWrap>
      <div>
        <StyledTitle>Crea Un Prodotto</StyledTitle>
      </div>
      <StyledWrapForm>
        <form onSubmit={props.handleSubmitLogIn}>
          <StyledWrapInput>
            <Input
              label="TITLE"
              required={true}
              name="title"
              type="text"
              handleChange={props.handleFormLogInChange}
            />
          </StyledWrapInput>
          <StyledWrapInput>
            {" "}
            <Input
              label="CATEGORY"
              required={true}
              name="category"
              type="text"
              handleChange={props.handleFormLogInChange}
            />
          </StyledWrapInput>
          <StyledWrapInput>
            {" "}
            <Input
              label="PRICE"
              required={true}
              name="price"
              type="number"
              min={0}
              handleChange={props.handleFormLogInChange}
            />
          </StyledWrapInput>
          <StyledWrapInput>
            {" "}
            <Input
              label="EMPLOYES"
              required={true}
              name="employee"
              type="text"
              handleChange={props.handleFormLogInChange}
            />
          </StyledWrapInput>
          <StyledWrapInput>
            {" "}
            <Input
              label="DESCRIPTION"
              required={true}
              name="description"
              type="text"
              handleChange={props.handleFormLogInChange}
            />
          </StyledWrapInput>
          <StyledWrapButton>
            <Button variant="primary" type="submit">
              Crea
            </Button>
          </StyledWrapButton>
        </form>
      </StyledWrapForm>
    </StyledWrap>
  );
};
