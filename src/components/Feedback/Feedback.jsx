import css from "./Feedback.module.css";
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
            <button type="button" className={css.button__option} name="good" value={options.good} onClick={onLeaveFeedback}>Good</button>
            <button type="button" className={css.button__option} name="neutral" value={options.neutral} onClick={onLeaveFeedback}>Neutral</button>
            <button type="button" className={css.button__option} name="bad" value={options.bad} onClick={onLeaveFeedback}>Bad</button>
        </>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};