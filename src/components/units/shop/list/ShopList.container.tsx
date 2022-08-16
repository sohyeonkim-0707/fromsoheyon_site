import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import ShopListUI from "./shopList.presenter";
import { FETCH_USED_ITEMS } from "./shopList.queris";

export default function Shop() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {});

  const onClickDetailPhoto =
    (el: any) => (event: MouseEvent<HTMLDivElement>) => {
      router.push(`/shop/${event.currentTarget.id}`);
    };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <ShopListUI
      data={data}
      onClickDetailPhoto={onClickDetailPhoto}
      onLoadMore={onLoadMore}
    />
  );
}
