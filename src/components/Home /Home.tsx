import React, { FC, useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Button } from "../Button /Button";
import { useDispatch, useSelector } from "react-redux";
import {
  ACTION_DELETE_PRODUCT_REQUEST,
  FETCH_PRODUCTS_LIST_REQUEST,
} from "../../redux/actions";
import { selectorProducts } from "../../redux/selectors";

export const Home: FC = () => {
  const productsList = useSelector(selectorProducts);
  const dispatch = useDispatch();
  // console.log(productsList);
  useEffect(() => {
    dispatch({
      type: FETCH_PRODUCTS_LIST_REQUEST,
    });
  }, []);

  const deleteProduct = (id: string) => {
    dispatch({ type: ACTION_DELETE_PRODUCT_REQUEST, payload: id });
  };

  return (
    <>
      <div>
        <h1>title</h1>
      </div>
      <div>
        {productsList &&
          productsList.map((product: any, index: number) => (
            <div key={product.id}>
              <Card
                title={product.data.title}
                price={product.data.price}
                description={product.data.description}
              />
              <Button
                variant="secondary"
                handleClick={() => deleteProduct(product.id)}
              >
                Elimina
              </Button>
            </div>
          ))}
      </div>
    </>
  );
};
