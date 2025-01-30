
export default getPictures;

async function getPictures(query) {
    const BASE_URL = 'https://pixabay.com/api';
    const searchParams = new URLSearchParams({
    key: '48530484-8b1e6b3578d96dabcf99a211e',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

    const url = `${BASE_URL}/?${searchParams}`;

    return fetch(url).then(res => res.json());
}
