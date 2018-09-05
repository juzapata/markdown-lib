module.exports.getLinksFromMd = function getLinksFromMd(text){
if (text === undefined){
  throw new Error ("Parametro não pode ficar vazio")
}
if (typeof text === "number"){
  throw new Error ("Não pode inserir número")
}
const regexAdress = new RegExp(/(((http|https):\/{2})?(www.)?([a-z0-9-]+\.){1,2})([a-z]{2,3}(\/([\w\?\=\&\%\@\.\-\_\!\#]*\/*)*\b|\b))/g);
const regexName = new RegExp(/(?<=\[)([a-z0-9]*)(?=\])/g);
let adress = text.match(regexAdress);
let name = text.match(regexName);
let newArray = [];
if (adress !== null && name !== null){
newArray = adress.map((a, index)=>({
  href: a,
  text: name[index]
}));
}
if (newArray){
  return newArray
}else {
  return []
}
}
/* 
Quando o texto for uma string e nao houver url deve retornar um array vazio.
Quando o texto for uma string e houver uma url deve retornar um array com o objeto com a url e o link do markdown.
Quando o texto for uma string e houver tres urls diferentes deve retornar o objeto dentro do array.
*/