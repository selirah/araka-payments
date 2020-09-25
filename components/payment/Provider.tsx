import React from 'react';
import { Product } from 'interfaces/Product';

type Prop = {
  product: Product;
  updateSelectedProduct(productId: number): void;
};

const Provider: React.FC<Prop> = ({ product, updateSelectedProduct }) => {
  return (
    <React.Fragment>
      <div className="col-sm-3 text-center option">
        <img
          src={`data:image/jpeg;base64,${product.image}`}
          alt=""
          onClick={() => updateSelectedProduct(product.productId)}
        />
        <h2 onClick={() => updateSelectedProduct(product.productId)}>
          {product.name}
        </h2>
      </div>
    </React.Fragment>
  );
};

export { Provider };
