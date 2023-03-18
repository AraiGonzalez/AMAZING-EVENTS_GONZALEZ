//Constantes
const contenedorCards = document.getElementById('events')
const input = document.querySelector('input')
const contenedorchecks = document.getElementById('checkConteiner')

   let data
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((res)=>res.json())
.then((data)=>{
    console.log(data.events)
    
    crearCheckboxes(data.events, contenedorchecks)
    showCards(data.events)

      input.addEventListener('input', () => {
      superFiltro(data, input.value)
   
    })
    contenedorchecks.addEventListener('change', () => {
       superFiltro(data.events, input.value)
      
    })
})
.catch((error)=> console.log(error))
    //llamo a las funciones
   // crearCheckboxes(data.events, contenedorchecks)
   // showCards(data.events)
    //Eventos
  
  //}
 // catch (error) {
   // console.log(error);
   // alert('Error')
 // }
//}
//obtenerEventos()





