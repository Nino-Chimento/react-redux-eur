import React, { FC, useEffect, useState } from "react";
import Styled from "styled-components";
import { Card } from "../Card/Card";
import { Button } from "../Button /Button";
import { useDispatch, useSelector } from "react-redux";
import {
  ACTION_CREATE_PRODUCT_REQUEST,
  ACTION_DELETE_PRODUCT_REQUEST,
  FETCH_PRODUCTS_LIST_REQUEST,
} from "../../redux/actions";
import { selectorError, selectorProducts } from "../../redux/selectors";
import { FormCreate } from "../FormCreate/FormCreate";
import { useFormik } from "formik";

const StyledError = Styled.div`
  width:100%;
  height:50px;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:red;
  text-transform:uppercase;
  font-size:16px;
`;

const StyledTitle = Styled.div`
    width:100%;
    text-align:center;
`;

const StyledForm = Styled.div`
  width:60%;
  margin:auto;
`;

const StyledWrapProducts = Styled.div`
  padding: 20px 0 20px 0;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  flex-direction: ${(props: { layout: string }) =>
    props.layout === "Panel" ? "column" : ""};
`;

const StyledWrapProduct = Styled.div`
  border:1px solid black;
  width:30%;
  text-align:center;
  margin-bottom:10px;
  margin:auto;
  margin-bottom: ${(props: { layout: string }) =>
    props.layout === "Panel" ? "10px" : ""};
  width: ${(props: { layout: string }) =>
    props.layout === "Panel" ? "90%" : ""};

`;

const StyledButton = Styled.div`
  width:40%;
  margin:auto;
  height:20px;
  margin-bottom:10px;
`;

export const Home: FC = () => {
  const [layout, setLayout] = useState("");
  const productsList = useSelector(selectorProducts);
  const error = useSelector(selectorError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: FETCH_PRODUCTS_LIST_REQUEST,
    });
  }, []);

  const deleteProduct = (id: string) => {
    dispatch({ type: ACTION_DELETE_PRODUCT_REQUEST, payload: id });
  };

  const formikCreate = useFormik({
    initialValues: {
      title: "",
      category: "",
      price: 0,
      employee: "",
      description: "",
    },
    onSubmit: (values) => {
      dispatch({ type: ACTION_CREATE_PRODUCT_REQUEST, payload: values });
    },
  });

  return (
    <>
      {error && (
        <StyledError>
          {" "}
          <div>{error}</div>
        </StyledError>
      )}
      <StyledTitle>
        <h1>Shoop Product</h1>
      </StyledTitle>
      <StyledForm>
        <FormCreate
          handleFormLogInChange={formikCreate.handleChange}
          handleSubmitLogIn={formikCreate.handleSubmit}
        />
      </StyledForm>
      <div>
        <select onChange={(e) => setLayout(e.target.value)}>
          <option>Select Layout</option>
          <option value="Grid">Grid Layout</option>
          <option value="Panel">Panel Layout</option>
        </select>
      </div>
      <StyledWrapProducts layout={layout}>
        {productsList &&
          productsList.map((product: any, index: number) => (
            <StyledWrapProduct key={product.id} layout={layout}>
              <Card
                title={product.data.title}
                price={product.data.price}
                description={product.data.description}
              />
              <StyledButton>
                <Button
                  variant="secondary"
                  handleClick={() => deleteProduct(product.id)}
                >
                  Elimina
                </Button>
              </StyledButton>
            </StyledWrapProduct>
          ))}
      </StyledWrapProducts>
    </>
  );
};
