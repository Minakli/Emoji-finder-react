import { Header } from "./Components/Header/Header.jsx";
import { Main } from "./Components/Main/Main.jsx";
import { Footer } from "./Components/Footer/Footer";
import { useState, useEffect } from "react";
import { emojiesData } from "./Components/emoji.js";
//Убирает сдвоенные слова
function deleteRepeatKeywords() {
  emojiesData.map((elem) => {
    let setElem = new Set(elem.keywords.split(" "));
    return (elem.keywords = Array.from(setElem).join(" "));
  });
}
deleteRepeatKeywords();
function App() {
  console.log(emojiesData);
  //Массив эмоций
  const [emojies, setEmojies] = useState(emojiesData);
  //Отфильтрованный массив
  const [emojiesFiltred, setEmojiesFiltred] = useState(emojies);
  //Массив клавиш пагинации
  const [btnPgnArr, setBtnPgnArr] = useState(Math.ceil(emojies.length / 12));
  //Количество эмоций на странице
  const [emojiesPerPage, setEmojiesPerPage] = useState(12);
  //Массив текущей страницы
  const [currentPage, setCurrentPage] = useState(
    emojiesFiltred.slice(0, emojiesPerPage)
  );

  //Вводимое в инпут
  const [inputValue, setInputValue] = useState("");
  //Количество страниц
  const pagesQuantity = Math.ceil(emojies.length / emojiesPerPage);
  //Массив номеров страниц
  const pagesNumbers = [];
  for (let i = 1; i < pagesQuantity; i++) {
    pagesNumbers.push(i);
  }
  const startPage = 0;
  const endPage = 0;

  // console.log(pagesNumbers);

  //Фильтр по инпуту
  function searchEmoji(event) {
    setInputValue(event.target.value);
    console.log(inputValue);
    let tmpEmojies = emojies.filter((elem, index) =>
      elem.title.includes(inputValue)
    );
    setEmojiesFiltred(tmpEmojies);
    console.log(emojiesFiltred);
  }

  return (
    <>
      <Header />
      <Main
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        searchEmoji={searchEmoji}
        emojies={emojies}
        inputValue={inputValue}
      />
      <Footer
        setCurrentPage={setCurrentPage}
        emojiesPerPage={emojiesPerPage}
        setEmojiesPerPage={setEmojiesPerPage}
        setEmojies={setEmojies}
        emojiesFiltred={emojiesFiltred}
        pagesNumbers={pagesNumbers}
        setBtnPgnArr={setBtnPgnArr}
        btnPgnArr={btnPgnArr}
      />
    </>
  );
}

export default App;
