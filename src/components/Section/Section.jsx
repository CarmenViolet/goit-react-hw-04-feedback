import css from "./Section.module.css"

const Section = ({title, children}) => {
    return (
        <section className={css.feedback__section}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section;