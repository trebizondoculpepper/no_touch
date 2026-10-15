import './styles/main.css';

const app = document.querySelector<HTMLElement>('#app');
if (!app) throw new Error('Missing application root.');

app.innerHTML = `
  <p class="eyebrow">No Touch Order</p>
  <h1>DO NOT PRESS<br>THE BUTTON</h1>
  <p>A first-person narrative game. In development.</p>
`;
