import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import CommunityUI from "./communityList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./communityList.queris";

export default function Community() {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const onClickMoveToCommunityDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/community/${event.currentTarget.id}`);
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
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      onClickMoveToCommunityDetail={onClickMoveToCommunityDetail}
      onClickNew={onClickNew}
    />
  );
}
