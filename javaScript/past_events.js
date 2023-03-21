//async function obtenerEventos() {
  //try {
    //const respuesta = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
    //let data
    //if (respuesta.status == 200) {
     // data = await respuesta.json()
    //}
    ///else {
   //  data = JSON.parse(amazing.json)
   // }
   // console.log(data.events);

   let data
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((res)=>res.json())
.then((data)=>{
  let currentDate = data.currentDate
 
    //llamo a las funciones
    crearCheckboxes(data.events, contenedorchecks)
    const arrayFilter = data.events.filter (event => event.date < currentDate)
 
    showCards(arrayFilter)
    //Eventos
    input.addEventListener('input', () => {
      superFiltro(arrayFilter, input.value)
  
    })
    contenedorchecks.addEventListener('change', () => {
     superFiltro(arrayFilter, input.value)

    })
  })
 
 // catch (error) {
   // console.log(error);
    //alert('Error')
 // }
//}
//obtenerEventos()
//constantes
const contenedorCards = document.getElementById('pastEvents')
const contenedorchecks= document.getElementById('checkPast')
const input = document.querySelector('input')





