//const wholeMealData = document.querySelector('.wholeMealInfo');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
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
  const results = await getWholeMeals();
  const meals = results.data;
  
  const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectedMeals = mealArray.map((element) => {
    const random = getRandomIntInclusive(0, meals.length - 1);
    return meals[random];
  });
  console.table(selectedMeals);
}

  /*const html = mealsarray.map(place => {
    return `
        <tr>
            <td class="hallid">${place.hall_id}</td>
            <td class="hallname">${place.hall_name}</td>
            <td class="halladdress">${place.hall_address}</td>
        </tr>
    `;}).join('');
    wholeMealData.innerHTML = html;
}*/

window.onload = windowActions; /* calls windowActions as soon as page loads */