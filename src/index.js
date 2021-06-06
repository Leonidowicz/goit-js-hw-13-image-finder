import './css/styles.scss';
import onFetchError from './js/error';

import ref from './js/ref';
import fetchImages from './js/apiService';

import getMarkup from './temlates/getMurcup.hbs';
import setMurcup from './js/setMurcup';

ref.form.addEventListener('submit', submitHandler);
ref.more.addEventListener('click', showMore);
let searchQuery = '';

function submitHandler(event) {
  event.preventDefault();
  searchQuery = event.target.elements.input.value.trim();
  if (searchQuery.length === 0) {
    return;
  }

  fetchImages(searchQuery)
    .then(response => {
      console.log(response.hits.length);

      response.hits.length > 0
        ? ref.more.classList.remove('is-hidden')
        : ref.more.classList.add('is-hidden');
      ref.gallery.innerHTML = '';
      ref.form.classList.remove('start');
      ref.form.classList.add('workProcess');
      setMurcup(response.hits, ref.gallery, getMarkup(response));
    })
    .catch(error => {
      onFetchError(error, ref.gallery);
    })
    .finally((event.target.elements.input.value = ''));
}

function showMore() {
  fetchImages(searchQuery)
    .then(response => {
      console.log(response.hits.length);

      if (response.hits.length < 12) {
        ref.more.classList.add('is-hidden');
      }
      console.dir(ref.more);
      setMurcup(response.hits, ref.gallery, getMarkup(response));
      ref.gallery.lastElementChild.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
      ref.spase.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    })
    .catch(error => onFetchError(error, ref.gallery))
    .finally();
}
