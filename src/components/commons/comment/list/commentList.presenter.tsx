import ShopCommentListUIItem from "../list/item";
import InfiniteScroll from "react-infinite-scroller";
import { Scroll } from "./commentList.styles";

export default function MarketCommentListUI(props) {
  if (!props.data) return <div />;
  return (
    <Scroll>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchUseditemQuestions.map((el: any) => (
          <ShopCommentListUIItem
            key={el._id}
            el={el}
            id={el._id}
            onClickDelete={props.onClickDelete}
            userData={props.userData}
          />
        ))}
      </InfiniteScroll>
    </Scroll>
  );
}
