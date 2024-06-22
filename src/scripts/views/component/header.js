class HeaderBody extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addScrollListener();
  }

  render() {
    this.innerHTML = `
      <header id="header" class="app-bar">
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

  addScrollListener() {
    let lastScrollTop = 0;
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
        // Scroll ke bawah
        header.classList.add('hide');
        header.classList.remove('show');
      } else {
        // Scroll ke atas
        header.classList.add('show');
        header.classList.remove('hide');
      }

      if (scrollTop > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Untuk mobile atau browser yang setting scrollnya negatif
    });
  }
}

customElements.define('header-body', HeaderBody);
