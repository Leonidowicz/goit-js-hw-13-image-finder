export default function onFatchError(response, gallery) {
  if (!response.ok) {
    console.dir(response);

    gallery.insertAdjacentHTML(
      'beforeend',
      `<p class="error">Что-то пошло не так!</p>`,
    );
  }
}
