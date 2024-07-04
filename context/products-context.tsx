import { createContext } from "react";

export interface ProductContext {
  loading: boolean;
}

const productContext = createContext<ProductContext>({
  loading: true,
});
