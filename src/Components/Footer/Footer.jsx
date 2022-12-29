import style from "./footer.module.css"
export function Footer(props) {
 return (<div className={style.footer}>
<div className={style.decorline}>
    </div>
  <div className={style.container}>
    {console.log("object")}
    <div className={style.buttons}>
      <button onClick={() => props.setCurrentPage(1)}>First</button>
    
  {props.pagesNumbers.map((elem, index) => {
return (
  <button onClick={() => props.setCurrentPage(elem)}key={elem}>{elem}</button>
)
  })}

      <button onClick={() => props.setCurrentPage(props.pagesNumbers.length)}>Last</button>
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