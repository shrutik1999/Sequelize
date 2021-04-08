//const wholeMealData = document.querySelector('.wholeMealInfo');

async function getWholeMeals() {
  const endpoint = '/api/wholeMeal'; //changed endpoint name
  const request = await fetch(endpoint); //changed from endpoint
  const json = await request.json(); //changed json to jsonmeals
  //const mealsarray = json["data"];
  return json;
}

async function windowActions() {
  /* set a constant, html, equal will take the array from the data and insert into tbody */
  console.log('loaded window');
  const meals = await getWholeMeals();
  console.table(meals);
  /*const html = mealsarray.map(place => {
    return `
        <tr>
            <td class="hallid">${place.hall_id}</td>
            <td class="hallname">${place.hall_name}</td>
            <td class="halladdress">${place.hall_address}</td>
        </tr>
    `;}).join('');
    wholeMealData.innerHTML = html;*/
}

window.onload = windowActions; /* calls windowActions as soon as page loads */