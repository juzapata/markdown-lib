const mocha = require("mocha");
const chai = require("chai");
const markdown = require("./index");
const expect = chai.expect;

describe("markdown", function (){
  describe("#findLinks", function (){
    describe("quando não houver parâmetro", ()=>{
      it("deve me retornar um erro", ()=>{
        var errorFunction = function () {markdown.getLinksFromMd()}
        expect(errorFunction).to.throw("Parametro não pode ficar vazio");
      });
    });
    describe("Quando o texto for um numero", ()=>{
        it("deve me retornar um erro", ()=>{
          var errorFunction = function () {markdown.getLinksFromMd(1)}
          expect(errorFunction).to.throw("Não pode inserir número");
        });
      });
      describe("Quando o texto for uma string e nao houver url", ()=>{
        it("deve me retornar um array vazio", ()=>{
          expect(markdown.getLinksFromMd("sdjsdjsdjsdjlsdjsljs")).to.deep.equal([]);
        });
      });
      describe("Quando o texto for uma string e houver url", ()=>{
        it("deve retornar um array com o objeto com a url e o link do markdown.", ()=>{
          expect(markdown.getLinksFromMd("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore)")).to.deep.equal([ { href: 'https://en.wiktionary.org/wiki/labore',
          text: 'labore' } ]);
        });
      });
      describe("Quando o texto for uma string e houver url", ()=>{
        it("deve retornar um array com o objeto com a url e o link do markdown.", ()=>{
          expect(markdown.getLinksFromMd("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.[foo](http://foo.com)")).to.deep.equal([ { href: 'https://en.wiktionary.org/wiki/labore',
          text: 'labore' },
        { href: 'https://en.wiktionary.org/wiki/dolore',
          text: 'dolore' },
        { href: 'http://foo.com', text: 'foo' } ]);
        });
      });
  });
});


