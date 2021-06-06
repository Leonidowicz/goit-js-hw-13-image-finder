import './styles.scss';
import onFetchError from './error';

import ref from './ref';
import fetchImages from './apiService';

import getMarkup from './getMurcup.hbs';
import setMurcup from './setMurcup';

ref.form.addEventListener('submit', inputHandler);
ref.more.addEventListener('click', showMore);
let searchQuery = '';

function inputHandler(event) {
  event.preventDefault();
  searchQuery = event.target.elements.input.value.trim();

  fetchImages(searchQuery)
    .then(response => {
      ref.gallery.innerHTML = '';
      setMurcup(response.hits, ref.gallery, getMarkup(response));
      console.log(response.hits.length);
      response.hits.length > 0
        ? ref.more.classList.remove('is-hidden')
        : ref.more.classList.add('is-hidden');
    })
    .catch(error => onFetchError(error, ref.gallery))
    .finally((event.target.elements.input.value = ''));
}

function showMore() {
  fetchImages(searchQuery)
    .then(response => {
      setMurcup(response.hits, ref.gallery, getMarkup(response));
      ref.more.scrollIntoView({ behavior: 'smooth', block: 'end' });
    })
    .catch(error => onFetchError(error, ref.gallery));
}
