import MypageUI from "./Mypage.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../login/Login.quries";
import {
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
} from "./Mypage.queris";
import {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from "../../../commons/types/generated/types";

export default function Mypage() {
  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  const { data: pointCount } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING
  );

  return (
    <MypageUI
      userInfo={userInfo}
      data={data}
      refetch={refetch}
      pointCount={pointCount}
    />
  );
}
