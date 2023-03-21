////FuncionesGenerales
function crearCheckboxes(arrayDatos,contenedor){
  let checks = ''
    let categoriesRepetidas = arrayDatos.map(elemento => elemento.category)

      let categories= new Set(categoriesRepetidas.sort((a,b)=>{
      if(a>b){
        return 1 
      }
      if (a<b){
        return -1
      }
      return 0
    }))
    categories.forEach(numberCategory =>{
    checks += `<div class="form-check">
    <input class="form-check-input" type="checkbox" name="Category" id="${numberCategory}" value="${numberCategory}">
    <label class="form-check-label text-light" for="${numberCategory}"> ${numberCategory}</label>
  </div>`
    })
    contenedor.innerHTML = checks
  }

 function filtrarPorTexto(arrayDatos, texto){
 
    let arrayFiltrado = arrayDatos.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}

function filtrarCategories(arrayDatos){
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  let arrayChecks = Array.from(checkboxes)
 
  let checksChecked = arrayChecks.filter(check => check.checked)
  if(checksChecked.length == 0){
      return arrayDatos
  }
  let checkValues = checksChecked.map(check => check.value)
  let arrayFiltrado = arrayDatos.filter(elemento => checkValues.includes(elemento.category))
  console.log(arrayFiltrado)
  return arrayFiltrado
}
function superFiltro(arrayDatos, value){
  
  let arrayFiltrado1 = filtrarPorTexto(arrayDatos, value)
  let arrayFiltrado2 = filtrarCategories(arrayFiltrado1)
  console.log("s2do filtro")
  console.log(arrayFiltrado2)
  showCards(arrayFiltrado2)

}
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
