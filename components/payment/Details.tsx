import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { AppState } from 'interfaces/AppState';
import { Category } from 'interfaces/Category';
import { Product } from 'interfaces/Product';

const selectFromStore = createSelector(
  (state: AppState) => state.categories,
  (state: AppState) => state.products,
  (state: AppState) => state.activeCategory,
  (state: AppState) => state.activeProduct,
  (state: AppState) => state.step,
  (categories, products, activeCategory, activeProduct, step) => ({
    categories,
    products,
    activeCategory,
    activeProduct,
    step,
  })
);

const Details: React.FC = () => {
  const dispatch = useDispatch();
  const {
    categories,
    products,
    activeCategory,
    activeProduct,
    step,
  } = useSelector(selectFromStore);

  let product: Product | undefined, category: Category | undefined;

  category = categories.find((c) => c.productCategoryId === activeCategory);
  product = products.find((p) => p.productId === activeProduct);

  return (
    <React.Fragment>
      <pre>{JSON.stringify(product)}</pre>
    </React.Fragment>
  );
};

export { Details };
