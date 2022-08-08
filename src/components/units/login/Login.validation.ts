import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요 .")
    .required("이메일은 필수 입력사항입니다."),
  password: yup
    .string()
    .max(16, "영문+숫자조합 8~16자리의 비밀번호 입력해주세요.")
    .required("비밀번호는 필수입력 사항입니다."),
});
