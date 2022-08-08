import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(1, "상품명은 최소 1자 이상입니다.")
    .max(15, "상품명은 최대 20자 까지입니다.")
    .required("필수 입력 사항입니다."),
  remarks: yup
    .string()
    .min(5, "한줄요약은 최소 5자 이상입니다.")
    .max(20, "한줄요약은 최대 20자 까지입니다.")
    .required("필수 입력 사항입니다."),
  contents: yup
    .string()
    .min(5, "상품설명은 최소 5자 이상입니다.")
    .max(1000, "상품설명은 최대 1000자 까지입니다.")
    .required("필수 입력 사항입니다."),
  price: yup.string().required("숫자만 입력해주세요."),
});

export const editSchema = yup.object({
  name: yup
    .string()
    .min(1, "상품명은 최소 1자 이상입니다.")
    .max(15, "상품명은 최대 20자 까지입니다.")
    .required("필수 입력 사항입니다."),
  remarks: yup
    .string()
    .min(5, "한줄요약은 최소 5자 이상입니다.")
    .max(20, "한줄요약은 최대 20자 까지입니다.")
    .required("필수 입력 사항입니다."),
  contents: yup
    .string()
    .min(5, "상품설명은 최소 5자 이상입니다.")
    .max(1000, "상품설명은 최대 1000자 까지입니다.")
    .required("필수 입력 사항입니다."),
  price: yup.string().required("숫자만 입력해주세요."),
});
