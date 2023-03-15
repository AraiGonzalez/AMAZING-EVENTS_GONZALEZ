//constantes
const contenedorCards = document.getElementById('pastEvents')
const contenedorchecks= document.getElementById('checkPast')
const input = document.querySelector('input')

//llamar funciones
crearCheckboxes(data.events,contenedorchecks)
showCardsPast(data.events)


//Funciones
function showCardsPast(arrayDatos){
  let cards = ''
  let currentDate = data.currentDate
  for(datas of arrayDatos){
   
    if (currentDate>datas.date){
    cards += `<div class="card contCard" style="width: 18rem;">
    <img src="${datas.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${datas.name}</h5>
      <p class="card-text">${datas.description}</p>
      <p>$ ${datas.price}</p>
      <a href="/details.html#cinema" class="btn btn-primary"> Details</a>
    </div>
  </div>`
     } ;
  }
  contenedorCards.innerHTML = cards
  
}

//Eventos
input.addEventListener('input',()=>{
  let arrayFiltrado1=filtrarPorTexto(data.events,input.value)
  showCardsPast(arrayFiltrado1)
})
contenedorchecks.addEventListener('change',()=>{
  let arrayFiltradoa = filtrarCategories(data.events)
  showCardsPast(arrayFiltradoa)
})

