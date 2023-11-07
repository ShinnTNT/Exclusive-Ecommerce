import axios from "@/lib/api/axios";
import { useQuery } from "react-query";
import { Product, ProductQuery, ProductResponse } from "./types";
import { GetResponse } from "@/lib/types/api";
import { generateProductQueryString } from "@/lib/utils";
import { ProductSelector } from "./selectors";

const fetchProducts = async (
  payload: ProductQuery
): Promise<GetResponse<ProductResponse>> => {
  const queryString = generateProductQueryString(payload);
  const response = await axios.get(queryString);
  // console.log(response.data);

  return response.data;
};

export const useGetProducts = (payload: ProductQuery) => {
  return useQuery({
    queryKey: ["fetch-products", payload],
    queryFn: () => fetchProducts(payload),
    select: (data): Product[] => ProductSelector(data.data),
  });
};
