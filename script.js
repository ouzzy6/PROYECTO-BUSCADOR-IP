const fetchIPinfo = ip => {
  const OPTIONS = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '2982314edemsh606d5049f4ccd57p1c1050jsn08faaed13f92',
      'x-rapidapi-host': 'ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com'
    }
  };

  // Construir la URL correcta incluyendo la IP como parámetro de consulta
  const url = `https://ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com/backend/ipinfo/?ip=${ip}`;

  return fetch(url, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err));
};

const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $submit = document.querySelector('#submit');
const $resultado = document.querySelector('.resultado');

$form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { value } = $input;
  if (!value) return;

  $submit.setAttribute('disabled', '');
  $submit.setAttribute('aria-busy', 'true');

  const ipinfo = await fetchIPinfo(value);

  if (ipinfo) {
    $resultado.textContent = JSON.stringify(ipinfo, null, 2);
  }

  $submit.removeAttribute('disabled');
  $submit.removeAttribute('aria-busy');
});
