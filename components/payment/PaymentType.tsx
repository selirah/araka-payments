import React from 'react';
import { Category } from 'interfaces/Category';

type Prop = {
  category: Category;
  updateSelectedCategory(categoryId: number): void;
};

const PaymentType: React.FC<Prop> = ({ category, updateSelectedCategory }) => {
  let svg: string = category.image;
  let blob: Blob = new Blob([svg], { type: 'image/svg+xml' });
  let url: string = URL.createObjectURL(blob);

  return (
    <React.Fragment>
      <div className="col-sm-3 text-center option">
        <img
          src={url}
          alt=""
          onClick={() => updateSelectedCategory(category.productCategoryId)}
        />
        <h2 onClick={() => updateSelectedCategory(category.productCategoryId)}>
          {category.name}
        </h2>
      </div>
    </React.Fragment>
  );
};

export { PaymentType };
