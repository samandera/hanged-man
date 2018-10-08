

const fetchIdiom = (dispatch, lang, title) => {
  fetch( `${lang}.wiktionary.org/w/api.php?action=parse&page=${title}`,{method: 'get'})
}
