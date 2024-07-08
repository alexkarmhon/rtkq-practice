import { Loader } from 'components/Loader/Loader';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { useGetProductsQuery } from 'reduxx/products/productsApi';

import css from './ProductsList.module.css';

export const ProductsList = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();
  console.log(products);

  return (
    <>
      {isLoading && <Loader />}
      {products && (
        <div className={css.container}>
          <div className={css.gridContainer}>
            {products.map(product => (
              <ProductCard
                product={product}
                key={product.id}
                // deleteProduct={() => dispatch(deleteProductThunk(product.id))}
              />
            ))}
          </div>
        </div>
      )}
      {isError && <p>Error</p>}
    </>
  );
};
