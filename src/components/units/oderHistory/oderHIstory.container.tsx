import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsOfBuyingArgs,
} from "../../../commons/types/generated/types";
import OderHistoryUI from "./oderHIstory.presenter";
import { FETCH_POINT_TRANSACTIONS_OF_BUYING } from "./oderHistory.queris";

export default function OderHistory() {
  const { data } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfBuying">,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_BUYING);

  return <OderHistoryUI data={data} />;
}
