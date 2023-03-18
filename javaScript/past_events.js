//constantes
const contenedorCards = document.getElementById('pastEvents')
const contenedorchecks= document.getElementById('checkPast')
const input = document.querySelector('input')

//llamar funciones
crearCheckboxes(data.events,contenedorchecks)
showCards(data.events)


//Funciones
function showCards(arrayDatos){
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
      <a href="./details.html?id=${datas._id}" class="btn btn-primary"> Details</a>
    </div>
  </div>`
     } ;
  }
  contenedorCards.innerHTML = cards
  
}

//Eventos
input.addEventListener('input',()=>{
  let arrayFiltrado1=filtrarPorTexto(data.events,input.value)
  showCards(arrayFiltrado1)
})
contenedorchecks.addEventListener('change',()=>{
  let arrayFiltradoa = filtrarCategories(data.events)
  showCards(arrayFiltradoa)
})

