export default async function makeMurcup(response, gallery, callback) {
  if (response.length === 0) {
    gallery.innerHTML =
      '<p class="allert">Внимание!</br>По ваему запросу ничего не найдено, уточните поиск.</p>';
    return;
  } else {
    gallery.insertAdjacentHTML('beforeend', callback);
  }
}
