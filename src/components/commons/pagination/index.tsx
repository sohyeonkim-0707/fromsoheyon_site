import { MouseEvent, useState } from "react";
import styled from "@emotion/styled";
import { breakPoints } from "../media/media";

interface IPageProps {
  isActive?: boolean;
}

const Container = styled.div`
  margin-top: 30px;
`;
const Page = styled.span`
  margin: 0px 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${(props: IPageProps) => (props.isActive ? "#D9D9D9" : "black")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
  @media ${breakPoints.tablet} {
    font-size: 15px;
    line-height: 24px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 30px;
    font-size: 10px;
  }
`;

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    const activedPage = Number(event.target.id);
    setActivedPage(activedPage);
    props.refetch({ page: activedPage }); // refetch 부모 bordelist.container>presenter에서 가져옴
  };

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setActivedPage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setActivedPage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <Container>
      <Page onClick={onClickPrevPage}>&lt;</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          startPage + index <= lastPage && (
            <Page
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
              isActive={startPage + index === activedPage}
            >
              {startPage + index}
            </Page>
          )
      )}
      <Page onClick={onClickNextPage}>&gt;</Page>
    </Container>
  );
}
