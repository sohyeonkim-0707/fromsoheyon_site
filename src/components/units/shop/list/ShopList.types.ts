import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IShopListProps {
  data: Pick<IQuery, "fetchUseditems">;
  onClickDetailPhoto: (el: any) => (event: MouseEvent<HTMLDivElement>) => void;
  onLoadMore: () => void;
}
