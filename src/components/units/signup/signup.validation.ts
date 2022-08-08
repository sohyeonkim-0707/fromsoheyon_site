import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .min(2, "이름은 2자리 이상 입력해 주세요.")
    .max(10, "10자 이내로 입력해주세요.")
    .required("이름은 필수 입력 사항입니다."),
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .matches(
      /^[A-Za-z0-9+]{8,16}$/,
      "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호는 필수 입력 사항입니다."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
});
