const contenedorCards = document.getElementById('pastEvents')

showCards(data.events,contenedorCards)


function showCards(arrayDatos,contenedor){
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
  contenedor.innerHTML = cards
  
}

const contenedorCategories = document.getElementById('categories')

showCategories(data.events,contenedorCategories)

function showCategories(arrayDatos,contenedor){
  let categories = ''
  let nameCategory = ''
  let numberCategory = 0
  for(datas of arrayDatos){
    if (nameCategory != datas.category){
      nameCategory = datas.category
      numberCategory += 1
    categories += `<div class="form-check">
    <input class="form-check-input" type="checkbox" name="Category" id="Category${numberCategory}}">
    <label class="form-check-label text-light" for="Category${numberCategory}">
      ${datas.category}
    </label>
  </div>`
  }
}
  contenedor.innerHTML = categories
  
}