import ThePageDbSource from '../../data/page-data';
import { pageDetail } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
        <div id="detail" class="details-position"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;

    try {
      const ideasAsc = await ThePageDbSource.fetchIdeas(1, 100, 'published_at');
      const ideasDesc = await ThePageDbSource.fetchIdeas(1, 100, '-published_at');

      const ideas = [...ideasAsc, ...ideasDesc];
      let idea;

      for (let i = 0; i < ideas.length; i++) {
        if (ideas[i].id == id) {
          idea = ideas[i];
          break;
        }
      }
      console.log(idea);

      const detailContainer = document.querySelector('#detail');
      detailContainer.innerHTML = pageDetail(idea);
    } catch (error) {
      console.error('Error fetching detail:', error);
    }
  },
};

export default Detail;
