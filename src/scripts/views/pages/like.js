// import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { restoMain } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content" id="content">
        <h1 tabindex="0" class="title-content">Restaurant Favorite</h1>
        <div class="item-resto" id="item-resto"></div>
        <h1 class="item-resto__not__found" id="item-resto__not__found">Tidak ada resto untuk ditampilkan</h1>
    </div>
  `;
  },

  async afterRender() {
    // const restaurant = await FavoriteRestoIdb.getAllResto();
    // const restoContainer = document.querySelector('#item-resto');
    // const notFoundElement = document.querySelector('.item-resto__not__found');

    // restaurant.forEach((resto) => {
    //   restoContainer.innerHTML += restoMain(resto);
    // });
    // if (restaurant.length === 0) {
    //   notFoundElement.style.display = 'block';
    // } else {
    //   notFoundElement.style.display = 'none';
    // }
  },
};

export default Like;
