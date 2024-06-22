class Banner extends HTMLElement {
  connectedCallback() {
    this.render();
    window.addEventListener('hashchange', this.updateTitle.bind(this));
    this.updateTitle();
  }

  render() {
    this.innerHTML = `
      <div class="banner">
        <div class="banner-image" style="background-image: url('/images/banner.jpg');"></div>
        <div class="banner-text">
            <h1>Banner Title</h1>
            <p>Where all our great things begin.</p>
        </div>
      </div>
        `;
  }

  updateTitle() {
    const hash = window.location.hash.split('/')[1];
    const titleMap = {
      work: 'Work',
      about: 'About Us',
      services: 'Our Services',
      ideas: 'Ideas',
      careers: 'Careers',
      contact: 'Contact Us',
      404: '404',
    };
    const newTitle = titleMap[hash] || 'Default Title';
    this.querySelector('.banner-text h1').textContent = newTitle;
  }
}

customElements.define('banner-body', Banner);

document.addEventListener('scroll', () => {
  const bannerText = document.querySelector('.banner-text');
  const scrollPosition = window.pageYOffset;
  bannerText.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
