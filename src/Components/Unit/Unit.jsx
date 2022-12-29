import style from "./unit.module.css"
export function Unit({emoji, title, description}) {
    return <div className={style.wrapper}>
        <p className={style.emoji}>{emoji}</p>
        <p className={style.title}>{title}</p>
        <p className={style.description}>{description}</p>
    </div>
}