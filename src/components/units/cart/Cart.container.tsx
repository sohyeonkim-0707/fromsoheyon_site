import CartUI from "./Cart.presenter";
import { useRecoilState } from "recoil";
import { basketItemState } from "../../../commons/store";
import { useEffect } from "react";

export default function Cart() {
  const [basketItems, setBasketItems] = useRecoilState(basketItemState);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  return <CartUI basketItems={basketItems} />;
}
