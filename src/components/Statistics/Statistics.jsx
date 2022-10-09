import css from "./Statistics.module.css";
import PropTypes from 'prop-types';

 const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    
    return (
        <>
        <p className={css.feedback__good}>Good: {good}</p>
        <p className={css.feedback__neutral}>Neutral: {neutral}</p>
        <p className={css.feedback__bad}>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
        </>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}