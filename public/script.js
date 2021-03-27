const diningdata = document.querySelector('.hallinfo');

async function windowActions() {
  const endpoint = '/api/dining';
  const request = await fetch(endpoint);
  const json = await request.json();
  const hallarray = json["data"];

  /* set a constant, html, equal will take the array from the data and insert into tbody */
  const html = hallarray.map(place => {
    return `
        <tr>
            <td class="hallid">${place.hall_id}</td>
            <td class="hallname">${place.hall_name}</td>
            <td class="halladdress">${place.hall_address}</td>
        </tr>
    `;}).join('');
  diningdata.innerHTML = html;
}

window.onload = windowActions; /* calls windowActions as soon as page loads */