import './styles.css';

console.log('hello world!');

const title = document.querySelector('h1');

if (title) {
  title.innerHTML += '!';
}
