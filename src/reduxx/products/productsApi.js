import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const BASE_URL = "https://api.escuelajs.co/api/v1";

// export const fetchProducts = async () => {
//   const data = await fetch(`${BASE_URL}/products`);
//   return await data.json()
// }

// export const createProduct = async (data) => {
//   const res = await fetch(`${BASE_URL}/products`, {
//     body: JSON.stringify(data)
//   });
//   return await res.json()
// }

// export const deleteProduct = async (id) => {
//   const res = await fetch(`${BASE_URL}/products/${id}`);
//   return await res.json()
// }

export const productsAPI = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    deleteProduct: builder.mutation({
      query: (id) => `/products/${id}`
    })
  })
})

export const { useGetProductsQuery, useDeleteProductMutation } = productsAPI;