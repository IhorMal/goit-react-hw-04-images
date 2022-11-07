
import css from './Button.module.css'

export const Button = ({ addImgs }) => {
    return (
        <>
            <button className={css.button} type="button" onClick={addImgs}>Load more</button>
        </>
    )
}