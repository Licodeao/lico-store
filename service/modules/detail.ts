import liRequest from "../index";
import type { IResultData } from "../index";
import type { IProduct } from "./home";

export interface IDetailInfo {
  id?: number;
  webPic?: string;
  products?: IProduct[];
}

export function getDetailInfoData(specialTopicId: string) {
  return liRequest.get<IResultData<IDetailInfo>>(
    "/special/getdetail?specialTopicId=" + specialTopicId
  );
}
