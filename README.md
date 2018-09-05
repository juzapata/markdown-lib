Conversor de números v.1.0.0
Esta biblioteca se destina à extração de links de arquivos markdown (Node.js).

Os métodos utilizados na biblioteca são:
getLinksFromMd(text);
Exemplo de uso:

$node
> const extractLinksFromMd = require('markdown-da-julia-zapata');
> const str = `# Lorem ipsum

>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

>[foo](http://foo.com)

>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

>const links = extractLinksFromMd(str);
> console.log(links); // [ { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' }, { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' }, { href: 'http://foo.com', text: 'foo' }]

versão 1.0.0
- funcionalidades: extração de links de markdown. Quando for uma string e houver uma ou mais urls, retorna um array com o objeto com a url e o link do markdown.
- Correção de bug de quando não houver parâmetro, deve lançar um erro.
- Correção de bug de quando o texto for um número deve lancar um erro.
- Correção de bug de quando o texto for uma string e não houver url deve retornar um array vazio.

Instalação

Você deverá ter o node + npm instalados. Para guia de instalação, visite https://www.npmjs.com/get-npm.
Proceda com a instalação com $npm install markdown-da-julia-zapata

Roadmap oficial do projeto

versão 1.0.1
- Adicionado o READM.me com instruções.
