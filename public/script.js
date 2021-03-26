const diningdata = document.querySelector('hallinfo');

async function windowActions() {
  const endpoint = '/api/dining';
  const request = await fetch(endpoint);
  const json = await request.json();
  res.json(json); 
  
  /* copied code from old lab
  const html = something.map(place => {
    return `
    `;
}).join('');
data.innerHTML = html;
};
*/

window.onload = windowActions;

/* async function dininghalls(){
    const request = await fetch("/api/dining");
    const data = await request.json(); */