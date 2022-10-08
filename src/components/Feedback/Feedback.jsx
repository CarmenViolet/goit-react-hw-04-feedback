import css from "./Feedback.module.css"

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
            <button className={css.button__option} name="good" value={options.good} onClick={onLeaveFeedback}>Good</button>
            <button className={css.button__option} name="neutral" value={options.neutral} onClick={onLeaveFeedback}>Neutral</button>
            <button className={css.button__option} name="bad" value={options.bad} onClick={onLeaveFeedback}>Bad</button>
        </>
    )
}

export default FeedbackOptions;