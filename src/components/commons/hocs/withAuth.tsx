import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries";
import { accessTokenState } from "../../../commons/store";

// 권한 분기
export const withAuth = (Component) => (props) => {
  // 권한부기 로직 추가하기
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    async function Auth() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          router.push("/login");
          alert("로그인 후 이용 가능합니다!!!");
        }
      }
    }
    Auth();
  }, []);
  return <Component {...props} />;
};
