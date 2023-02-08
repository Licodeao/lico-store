import liRequest from "../index";

export interface ISearchProductResult {
  code: number;
  more: boolean;
  products?: any[];
}

export interface ISearchParam {
  limit: number;
  offset: number;
  key: string;
}

export const getProductSearchData = (params: ISearchParam) => {
  return liRequest.post<ISearchProductResult>(
    `/store/api/product/search`,
    params,
    {
      "Content-Type": "application/x-www-form-urlencoded",
    }
  );
};
