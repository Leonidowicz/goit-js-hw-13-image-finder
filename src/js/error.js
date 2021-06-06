export default function onFatchError(response, gallery) {
  if (!response.ok) {
    console.dir(response);
    gallery.innerHTML = `<p class="error">Что-то пошло не так!</p>`;
  }
}
