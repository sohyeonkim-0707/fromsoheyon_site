import * as S from "./Footer.styles";
import { useRouter } from "next/router";
import { MouseEvent, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

const FOOTER_MENU = [
  { name: "FILMS", page: "/shop" },
  { name: "CONTACT", page: "/contact" },
];

export default function Footer() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  return (
    <>
      <S.Wrapper>
        {FOOTER_MENU.map((el) => (
          <Fragment key={uuidv4()}>
            <S.MenuList id={el.page} onClick={onClickMenu}>
              {el.name}
            </S.MenuList>
          </Fragment>
        ))}
        <S.Instagram
          onClick={() =>
            window.open(
              "https://www.instagram.com/pidongbodaneungdong/",
              "_blank"
            )
          }
        >
          INSTAGRAM
        </S.Instagram>
      </S.Wrapper>
    </>
  );
}
