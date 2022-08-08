import AnswerListItemUI from "./item";

export default function AnswerListUI(props) {
  return (
    <div>
      {props.data?.fetchUseditemQuestionAnswers.map(
        (el) =>
          (
            <AnswerListItemUI
              key={el._id}
              el={el} // 📌 el 내려가기 시작
              id={el._id} // 📌 id 내려가기 시작
              data={props.data}
              questionId={props.questionId}
            />
          ) || <div></div>
      )}
    </div>
  );
}
