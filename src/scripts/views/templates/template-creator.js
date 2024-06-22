import CONFIG from '../../globals/config';

function publishDate(published_at) {
  const date = new Date(published_at);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString(CONFIG.LOCALE, options);
}

const pageMain = (page) => `
<article class="item" id="${page.id}">
  <img class="item-picture lazyload" crossorigin="anonymous" data-src="../images/picture.jpg" alt="${page.medium_image[0].file_name}">
  <div class="detail-item">
    <p>${publishDate(page.published_at)}</p>
    <a href="#/detail/${page.id}" class="link-item"><h3>${page.title}</h3></a>
  </div>
</article>
`;

const pageDetail = (page) => `
<div class="details-container">
    <img crossorigin="anonymous" data-src="${page.medium_image[0].url}" class="detail-img lazyload" alt="${page.medium_image[0].file_name}">

    <div class="detail-content">
        <h2 class="page-name">${page.title}</h2>
        <div class="detail-content">${page.content}</div>
    </div>
`;

// const createLikeButtonTemplate = () => `
//   <button aria-label="like this page" id="likeButton" class="like">
//      <i class="fa fa-heart-o" aria-hidden="true"></i>
//   </button>
// `;

// const createLikedButtonTemplate = () => `
//   <button aria-label="unlike this page" id="likeButton" class="like">
//     <i class="fa fa-heart" aria-hidden="true"></i>
//   </button>
// `;

export {
  pageMain,
  pageDetail,
//   createLikeButtonTemplate,
//   createLikedButtonTemplate,
};
