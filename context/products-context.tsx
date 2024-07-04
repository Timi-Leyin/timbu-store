import { GET_PRODUCTS } from "@/api/products";
import { useFetch } from "@/hooks/use-fetch";
import { ReactNode, createContext, useEffect } from "react";
import { Text } from "react-native";

export interface ProductContext {
  loading: boolean;
}

const productContext = createContext<ProductContext>({
  loading: true,
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const { loading, data, error, fetchData } = useFetch(GET_PRODUCTS);

  useEffect(() => {
    fetchData();
  },[]);
  return (
    <productContext.Provider
      value={{
        loading,
      }}
    >
      {children}
      {/* {loading?<Text>Loading...</Text>:<Text>Loaded</Text>} */}
    </productContext.Provider>
  );
};
