import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import CommunityUI from "./list.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./list.queris";

export default function Community() {
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardDetail =
    (el) => (event: MouseEvent<HTMLDivElement>) => {
      if (event.target instanceof Element)
        router.push(`/community/${event.target.id}`);
    };

  const onClickNew = () => {
    router.push("community/new");
  };

  return (
    <CommunityUI
      data={data}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      count={dataBoardsCount?.fetchBoardsCount}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickNew={onClickNew}
    />
  );
}
