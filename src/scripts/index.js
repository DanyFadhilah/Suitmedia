import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './views/component/header';
import './views/component/footer';
import './views/component/banner';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
