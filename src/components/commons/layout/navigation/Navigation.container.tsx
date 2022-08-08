import { Fragment } from "react";
import { useRouter } from "next/router";
import * as S from "./Navigation.styles";
import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "../../../units/login/Login.quries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import useMoveToPage from "../../hooks/useMoveToPage";

export default function Navigation() {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const [logoutUser] = useMutation(LOGOUT_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {}
    setAccessToken("");
    router.push("/");
    location.reload();
  };

  return (
    <>
      <S.Wrapper>
        <S.Logo onClick={onClickMoveToPage("/")}>피동보다 능동</S.Logo>

        <S.Menu>
          <S.MenuList onClick={onClickMoveToPage("/about")}>ABOUT</S.MenuList>
          <S.MenuList onClick={onClickMoveToPage("/shop")}>SHOP</S.MenuList>
          <S.MenuList onClick={onClickMoveToPage("/community")}>
            COMMUNITY
          </S.MenuList>
          <S.MenuList onClick={onClickMoveToPage("/mypage")}>MYPAGE</S.MenuList>
          {accessToken ? (
            <S.MenuList onClick={onClickLogout}>LOGOUT</S.MenuList>
          ) : (
            <S.MenuList onClick={onClickMoveToPage("/login")}>LOGIN</S.MenuList>
          )}
        </S.Menu>
      </S.Wrapper>
    </>
  );
}
