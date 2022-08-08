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
            id={el._id} // 📌 id 내려가기 시작 !!!!
            onClickDelete={props.onClickDelete}
            userData={props.userData}
          /> // 📌 el 내려가기 시작 !!!!
        ))}
      </InfiniteScroll>
    </Scroll>
  );
}
