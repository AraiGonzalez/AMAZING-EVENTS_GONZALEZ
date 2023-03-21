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
    let currentDate = data.currentDate
    console.log(data);

    //llamo a las funciones
    crearCheckboxes(data.events, contenedorchecks)

    const arrayFilter = data.events.filter (event => event.date > currentDate)
    console.log(arrayFilter)
    showCards(arrayFilter)
    //Eventos
    input.addEventListener('input', () => {
    superFiltro(arrayFilter, input.value)

    })
    contenedorchecks.addEventListener('change', () => {
     superFiltro(arrayFilter, input.value)

    })

  }
  catch (error) {
    console.log(error);
    alert('Error')
  }
}
obtenerEventos()
//constantes
const contenedorCards = document.getElementById('upcomingEvents')
const contenedorchecks = document.getElementById('checkUpcoming')
const input = document.querySelector('input')



