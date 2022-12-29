import { Unit } from "../Unit/Unit.jsx"
import style from "./main.module.css"


export function Main(props) {
return <main className={style.main}>
     <input  onInput={props.searchEmoji} className={style.input} type="text" placeholder="  Placeholder" value={props.inputValue}/>
   <div className={style.container}> {props.emojies.map((e,i) => <Unit key={i} emoji={e.symbol} title={e.title} description={e.keywords}/>
)}</div>
</main>
}