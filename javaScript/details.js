const queryString = document.location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")
const data1 = data.events.find(cards => cards._id == id)
const containerCards = document.getElementById("cardsContainerD")
containerCards.innerHTML += ` 
<div class="card contCard" style="width: 18rem;">
    <img src="${data1.image}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data1.name}</h5>
      <p class="card-text">Date: ${data1.date} </p>
      <p class="card-text">Description: ${data1.description}</p>
      <p class="card-text">Category: ${data1.category} </p>
      <p class="card-text">Place: ${data1.place} </p>
      <p class="card-text">Capacity: ${data1.capacity} </p>
      <p class="card-text">Assistance: ${data1.assistance}</p>
      <p> Price: $${data1.price}</p>
    </div>
  </div> `