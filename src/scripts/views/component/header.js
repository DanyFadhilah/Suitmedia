class HeaderBody extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="app-bar">
    <div class="app-bar__menu">
      <button id="hamburgerButton">☰</button>
    </div>
    <div class="app-bar__brand">
      <img src="./images/logo.png" alt="">
    </div>
    <nav id="navigationDrawer" class="app-bar__navigation">
      <ul>
        <li><a href="#/404">Work</a></li>
        <li><a href="#/404">About</a></li>
        <li><a href="#/404">Services</a></li>
        <li><a href="#/ideas">Ideas</a></li>
        <li><a href="#/404">Careers</a></li>
        <li><a href="#/404">Contact</a></li>
      </ul>
    </nav>
  </header>
        `;
  }
}

customElements.define('header-body', HeaderBody);
