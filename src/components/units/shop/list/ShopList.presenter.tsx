import Item from "./item/Item.container";
import * as S from "./ShopList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import { IShopListProps } from "./ShopList.types";

const Scroll = styled.div`
  width: 100%;
  /* height: 2000px; */
  margin: 0 auto;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 스크롤 없앰*/
  }
`;

const Infinite = styled(InfiniteScroll)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function ShopListUI(props: IShopListProps) {
  if (!props.data) return <div />;
  return (
    <>
      <S.Container>
        <Scroll>
          <Infinite
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el) => (
              <Item
                key={uuidv4()}
                el={el}
                id={el._id}
                onClickDetailPhoto={props.onClickDetailPhoto}
              />
            ))}
          </Infinite>
        </Scroll>
      </S.Container>
    </>
  );
}
