import style from "./footer.module.css"
export function Footer(props) {
 return (<div className={style.footer}>
<div className={style.decorline}>
    </div>
  <div className={style.container}>
    {console.log("object")}
    <div className={style.buttons}>
      <button className={style.btn} onClick={() => props.setCurrentPage(props.emojiesFiltred.slice(0, props.emojiesPerPage))}>First</button>
    
  {props.pagesNumbers.map((elem, index) => {
return (
  <button className={style.btn} onClick={() => props.setCurrentPage(props.emojiesFiltred.slice((elem - 1) * props.emojiesPerPage, props.emojiesPerPage + (elem-1) * props.emojiesPerPage))}key={elem}>{elem}</button>
)
  })}

      <button className={style.btn} onClick={() => {props.setCurrentPage(props.emojiesFiltred.slice((props.pagesNumbers.length) * props.emojiesPerPage, props.emojiesFiltred.length)
      )}
      }>Last</button>
</div>
      <div>
      <p>Per page</p>
      <select onChange={event => props.setEmojiesPerPage(event.target.value)}>
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="48">48</option>
      </select>
  </div>
  </div>
  </div>)
}