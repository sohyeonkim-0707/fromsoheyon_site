import AnswerListItemUI from "./item";

export default function AnswerListUI(props) {
  return (
    <div>
      {props.data?.fetchUseditemQuestionAnswers.map(
        (el) =>
          (
            <AnswerListItemUI
              key={el._id}
              el={el}
              id={el._id}
              data={props.data}
              questionId={props.questionId}
            />
          ) || <div></div>
      )}
    </div>
  );
}
