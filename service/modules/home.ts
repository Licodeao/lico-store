import liRequest from "../index";
import type { IResultData } from "../index";

export interface ISearchSuggest {
  id: number;
  defaultKey: string;
  configKey: any[];
}

export interface IBanner {
  id?: number;
  picStr?: string;
  backendPicStr?: string;
}

export interface ICategory {
  cid?: number;
  picStr?: string;
  title?: string;
  tabIndex?: number;
  count?: number;
  desc?: string;
  type?: number;
  targetUrl?: string;
}

export interface IRecommend {
  id?: number;
  picStr?: string;
  title?: string;
}

export interface IDigital {
  digitalIcon?: string;
  name?: string;
  desc?: string;
  buyNow?: string;
  picStr?: string;
  picStr2?: string;
  picStr1?: string;
}

export interface IHomeBanner {
  banners?: IBanner[];
  categorys?: ICategory[];
  recommends?: IRecommend[];
  digitalData?: IDigital;
}

export interface IProduct {
  id?: number;
  type?: number;
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  originalCost?: number;
  couponLabelDesc?: string;
  coverUrl?: string;
}

export interface IHotProduct {
  id?: number;
  products?: IProduct;
}

export interface IEditorRecommend {
  count?: number;
  hasMore?: boolean;
  hotProduct?: IHotProduct[];
}

export interface IHotRecommend {
  count?: number;
  allProduct?: IProduct[];
}

export function getSearchSuggestionsData() {
  return liRequest.get<IResultData<ISearchSuggest>>("/searchsuggest/get");
}

export function getHomeBannerData() {
  return liRequest.get<IResultData<IHomeBanner>>("/home/info");
}

export function getEditorRecommendData() {
  return liRequest.get<IResultData<IEditorRecommend>>("/hotproduct_v2/gets");
}

export function getHotRecommendData() {
  return liRequest.get<IResultData<IHotRecommend>>("/allProduct/gets");
}
