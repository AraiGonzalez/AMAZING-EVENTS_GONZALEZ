const contenedorCards = document.getElementById('elemento')

showCards(data.events,contenedorCards)


function showCards(arrayDatos,contenedor){
  let cards = ''
  for(datas of arrayDatos){
    cards += `<div class="card contCard" style="width: 18rem;">
    <img src="${datas.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${datas.name}</h5>
      <p class="card-text">${datas.description}</p>
      <p>${datas.price}</p>
      <a href="/details.html#cinema" class="btn btn-primary"> Datails</a>
    </div>
  </div>`
  }
  contenedor.innerHTML = cards
  
}