import Title from './assets/components/title/title.js';
import data from './assets/components/data/data.js';

const { download: { title } } = data;

console.log(Title);
console.log(Title(title));

const root = document.querySelector('#root');


root.append(title);

root.innerAdjacentHTML ('beforeed', Title(title))

root.insertAdjacentHTML ('beforeed'), Title({priority: 2, content: 'Test'});
