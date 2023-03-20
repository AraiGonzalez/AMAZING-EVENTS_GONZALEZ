async function obtenerEventos() {
  try {
    const respuesta = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
    let data
    if (respuesta.status == 200) {
      data = await respuesta.json()
    }
    ///else {
   //  data = JSON.parse(amazing.json)
   // }
    console.log(data.events);

    //llamo a las funciones
    crearCheckboxes(data.events, contenedorchecks)
    showCards(data.events)
    //Eventos
    input.addEventListener('input', () => {
      let arrayFiltrado1 = superFiltro(data.events, input.value)
      showCards(arrayFiltrado1)
    })
    contenedorchecks.addEventListener('change', () => {
      let arrayFiltradoa = superFiltro(data.events, input.value)
      showCards(arrayFiltradoa)
    })
  }
  catch (error) {
    console.log(error);
    alert('Error')
  }
}
obtenerEventos()
//Constantes
const contenedorCards = document.getElementById('events')
const input = document.querySelector('input')
const contenedorchecks = document.getElementById('checkConteiner')

//Funciones
function showCards(arrayDatos) {
  if (arrayDatos.length == 0) {
    contenedorCards.innerHTML = "<h5 class='mensagge'>No hay coincidencias!</h5>"
    return
  }
  let cards = ''
  for (datas of arrayDatos) {
    cards += `<div class="card contCard" style="width: 18rem;">
    <img src="${datas.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${datas.name}</h5>
      <p class="card-text">${datas.description}</p>
      <p>$ ${datas.price}</p>
      <a href="./details.html?id=${datas._id}" class="btn btn-primary"> Details</a>
    </div>
  </div>`
  }
  contenedorCards.innerHTML = cards

}



