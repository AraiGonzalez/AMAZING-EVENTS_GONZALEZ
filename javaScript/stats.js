let data
fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then((res) => res.json())
    .then((data) => {
        let currentDate = data.currentDate
        const contenedorList = document.getElementById('list')
        const contenedorList2 = document.getElementById('list2')
        const arrayFilter = data.events.filter(event => event.date < currentDate)
        const arrayFilter2 = data.events.filter(event => event.date > currentDate)
        const categories1 = filterRepeat(arrayFilter)
        const categories2 = filterRepeat(arrayFilter2)


        showTablePast(categories1, arrayFilter, contenedorList)
        showTableUpcoming(categories2, arrayFilter2, contenedorList2)

    })
    .catch((error) => console.log(error))

//funcion
function showTablePast(arrayDatos1, arrayDatos2, contenedor) {
    let evento = ''

    for (object1 of arrayDatos1) {
        let total = 0
        for (object2 of arrayDatos2) {
            if (object2.category == object1) {
                total = total + (object2.price * object2.assistance)
            }  
        }
     
        evento += ` <tr>
    <td class="statstrthtd" > ${object1}</td>
    <td class="statstrthtd" >$ ${total}</td>
    <td class="statstrthtd" ></td>
  </tr>`
    }
    contenedor.innerHTML = evento
}

function showTableUpcoming(arrayDatos1, arrayDatos2, contenedor) {
    let evento = ''
    for (object1 of arrayDatos1) {
        let total = 0
        for (object2 of arrayDatos2) {
            if (object2.category == object1) {
                total = total + (object2.price * object2.estimate)
            }
        }
        evento += ` <tr>
        <td class="statstrthtd" > ${object1}</td>
        <td class="statstrthtd" >$ ${total}</td>
        <td class="statstrthtd" ></td>
      </tr>`
    }
    contenedor.innerHTML = evento
}
function filterRepeat(arrayDatos) {
    let categoriesRepetidas = arrayDatos.map(elemento => elemento.category)
    let categories = new Set(categoriesRepetidas.sort((a, b) => {
        if (a > b) {
            return 1
        }
        if (a < b) {
            return -1
        }
        return 0
    }))
    return categories
}
