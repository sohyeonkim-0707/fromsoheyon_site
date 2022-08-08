import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const indexNum = atom({
  key: "index",
  default: 0,
});

export const basketItemState = atom({
  key: "basketItems",
  default: [],
});
