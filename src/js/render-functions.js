export default createMurkup;
    
function createMurkup(hits) {
    return hits.map(hit => {
        const {
            largeImageURL,
            webformatURL,
            tags,
            likes,
            views,
            comments,
            downloads,
        } = hit;

        return `<li class="gallery-item" >
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
    </a>
    <div class="item-text">
    <p class="numbers"><span class="top-item-text">Likes:</span> ${likes}</p>
    <p class="numbers"><span class="top-item-text">Views:</span> ${views}</p>
    <p class="numbers"><span class="top-item-text">Comments:</span> ${comments}</p>
    <p class="numbers"><span class="top-item-text">Downloads:</span> ${downloads}</p>
    </div>
  </li>`;
    }).join('');

}
