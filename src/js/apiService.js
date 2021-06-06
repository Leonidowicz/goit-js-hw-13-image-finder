const BASE_URL = 'https://pixabay.com/api/';
let page = 1;
const key = '21948023-054fe05cd08d0a129e2d1c0a6';

export default async function fetchImages(searchQuery) {
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${key}`,
  )
    .then(response => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then(data => {
      page++;
      return data;
    });
}
// export default class ApiImagesFinder {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     this.key = '21948023-054fe05cd08d0a129e2d1c0a6';
//   }

//   fetchImages() {
//     fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,)
//     .then(r => {if (!r.ok) {throw r;}return r.json();}).then(data => {this.page++;return data;});}

//   fetchImages(this.searchQuery)
//   .then(r => {ref.gallery.innerHTML = ''; setMurcup(r.hits, ref.gallery, getMarkup(r));})
//   .catch(error => onFetchError(error, ref.gallery))
//   .finally((event.target.elements.input.value = ''));
// }
