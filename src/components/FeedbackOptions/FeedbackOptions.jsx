export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return options.map(el => (
        <button key={el} onClick={onLeaveFeedback} type="button" name={el}>{el[0].toUpperCase()+el.substring(1)}</button>
    ))
}