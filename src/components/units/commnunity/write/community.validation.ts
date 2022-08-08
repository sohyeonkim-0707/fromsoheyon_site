import * as yup from "yup";

export const schema = yup.object().shape({
  writer: yup
    .string()
    .min(1, "상품명은 최소 1자 이상입니다.")
    .max(15, "상품명은 최대 20자 까지입니다.")
    .required("상품명을 반드시 입력해주세요!"),
  title: yup
    .string()
    .min(5, "제목은 최소 3자 이상입니다.")
    .max(20, "제목은 최대 20자 까지입니다.")
    .required("제목은 반드시 입력해주세요!"),
  contents: yup
    .string()
    .min(5, "내용은 최소 5자 이상입니다.")
    .max(500, "내용은 최대 500자 까지입니다.")
    .required("내용은 반드시 입력해주세요!"),
  password: yup
    .string()
    .max(4, "4자리의 비밀번호 입력해주세요.")
    .required("비밀번호는 필수입력 사항입니다."),
  youtubeUrl: yup.string(),
});

export const editSchema = yup.object({
  title: yup.string(),
  contents: yup.string(),
  youtubeUrl: yup.string(),
  password: yup
    .string()
    .max(4, "4자리의 비밀번호 입력해주세요.")
    .required("비밀번호는 필수입력 사항입니다."),
});
