import css from "./Statistics.module.css"

 const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    
    return (
        <>
        <p className={css.feedback__good}>Good: {good}</p>
        <p className={css.feedback__neutral}>Neutral: {neutral}</p>
        <p className={css.feedback__bad}>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage()}%</p>
        </>
    )
}

export default Statistics;