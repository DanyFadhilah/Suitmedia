import ThePageDbSource from '../../data/page-data';
import { pageMain } from '../templates/template-creator';

const Ideas = {
  async render() {
    return `
        <div class="sort">
          <p id="total-items">Showing 1 - 10 of 100</p>
          <div class="filter">
            <label for="page">Show per page:</label>
            <select name="page" id="page">
              <option value="10" selected>10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>

            <label for="newest">Sort by:</label>
            <select name="newest" id="newest">
              <option value="-published_at">Newest</option>
              <option value="published_at">Lates</option>
            </select>
          </div>
        </div>

        <div class="content" id="content">
          
        </div>

        <div class="pagination">
          <button id="prev-page" class="button"><</button>
            <span id="page-numbers"></span>
          <button id="next-page" class="button">></button>
        </div>
      `;
  },

  async afterRender() {
    const loadIdeas = async (pageNumber = 1, pageSize = 10, sort = '-published_at') => {
      try {
        const pageSize = document.getElementById('page').value;
        const ideas = await ThePageDbSource.fetchIdeas(pageNumber, pageSize, sort);
        const ideasContainer = document.querySelector('#content');
        ideasContainer.innerHTML = '';
        ideas.forEach((idea) => {
          ideasContainer.innerHTML += pageMain(idea);
        });

        const totalItemsText = `Showing ${(pageNumber - 1) * pageSize + 1} - ${Math.min(pageNumber * pageSize, 100)} of 100`;
        document.querySelector('#total-items').textContent = totalItemsText;

        const totalPages = Math.ceil(100 / pageSize);
        let pageNumbersHTML = '';
        for (let i = 1; i <= totalPages; i++) {
          const activeClass = i === pageNumber ? 'active' : '';
          pageNumbersHTML += `<button class="page-number ${activeClass}" data-page="${i}">${i}</button>`;
        }
        document.querySelector('#page-numbers').innerHTML = pageNumbersHTML;

        document.querySelectorAll('.page-number').forEach((button) => {
          button.addEventListener('click', () => {
            const page = parseInt(button.dataset.page);
            loadIdeas(page, pageSize, sort);
          });
        });

        document.querySelector('#prev-page').addEventListener('click', () => {
          if (pageNumber > 1) {
            loadIdeas(pageNumber - 1, pageSize, sort);
          }
        });

        document.querySelector('#next-page').addEventListener('click', () => {
          if (pageNumber < totalPages) {
            loadIdeas(pageNumber + 1, pageSize, sort);
          }
        });
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
    };

    loadIdeas(1, 100);

    document.querySelector('#page').addEventListener('change', (event) => {
      const pageSize = parseInt(event.target.value);
      loadIdeas(1, pageSize);
    });

    document.querySelector('#newest').addEventListener('change', (event) => {
      const sort = event.target.value;
      loadIdeas(1, undefined, sort);
    });
  },
};

export default Ideas;
