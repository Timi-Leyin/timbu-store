import { GET_PRODUCTS } from "@/api/products";
import { useFetch } from "@/hooks/use-fetch";
import { GetProductsResponse, ProductContext } from "@/interfaces/products";
import { ReactNode, createContext, useContext, useEffect } from "react";
import { Text } from "react-native";

export const productContext = createContext<ProductContext>({
  loading: true,
  data: null,
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const { loading, data, error, fetchData } = useFetch<
    any,
    GetProductsResponse
  >(GET_PRODUCTS);
  useEffect(() => {
    fetchData({
      reverse_sort: false,
      page: 1,
      size: 10,
    });
  }, []);
  return (
    <productContext.Provider
      value={{
        loading,
        data,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export const useProducts = () => useContext(productContext);
