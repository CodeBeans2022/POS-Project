let data = JSON.parse(localStorage.getItem('data'))
    let tableDisplay = document.querySelector('tbody')
    Object.keys(data).forEach((item) => {
        if(data[item]) {
            tableDisplay.innerHTML +=
            `
            <tr>
            <td>${data[item].id}</td>
            <td>${data[item].bookTitle}</td>
            <td>R${data[item].price}</td>
            <td><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalEdit"><i class="fa-sharp fa-solid fa-pen-to-square"></i></button></td>
            <td><button type="button" class="btn btn-danger"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
            </tr>
            `
        }
    })

let modalEdit = document.querySelector('#modalBodyForEdit')

modalEdit.innerHTML +=
`
<div class="row">

<h6>Picture</h6>

<div class="col">
<input placeholder="Insert Link"></input>
</div>
<div class="col">
<div class="dropdown">
    <button class="btn btn-sm btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
    <div class="dropdown-menu">

    <div class="card" style="width: 18rem;">
    <img src="/Assets/Black Panther.jpg" class="card-img-top dropdownImg" alt="...">
    <div class="card-body">
      <p>Copy link:</p>
      <p>https://i.postimg.cc/0NH32qBy/Black-Panther.jpg</p>
    </div>
  </div>

  <div class="card" style="width: 18rem;">
  <img src="/Assets/DarkCrisis.jpg" class="card-img-top dropdownImg" alt="...">
  <div class="card-body">
    <p>Copy link:</p>
    <p>https://i.postimg.cc/LXYWJ0cB/Dark-Crisis.jpg</p>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="/Assets/Fairyland.jpg" class="card-img-top dropdownImg" alt="...">
  <div class="card-body">
    <p>Copy link:</p>
    <p>https://i.postimg.cc/cCf5mt4v/Fairyland.jpg</p>
  </div>
</div>

    </div>
  </div>
</div>

</div>


<div class="row">

    <h6>Book Title</h6>

    <div class="col">

        <input placeholder="Insert Title"></input>

    </div>
    
    <div class="col">
        <div class="dropdown">
            <button class="btn btn-sm btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false"></button>
            <div class="dropdown-menu">
                  <h5>Copy Title:</h5>
                  <h6>Black Panther</h6>
                  <h6>Dark Crisis</h6>
                  <h6>Fairyland</h6>
            </div>
        </div>
    </div>

</div>

<div class="row">

<h6>Price</h6>

<div class="col">

<input placeholder="Insert Price"></input>

</div>

    </div>
    
    `

let modalAddItem = document.querySelector('#modalBodyForAddItem')   

modalAddItem.innerHTML +=
`
<div class="row">

<h6>Picture</h6>

<div class="col">
<input placeholder="Insert Link"></input>
</div>
<div class="col">
<div class="dropdown">
    <button class="btn btn-sm btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
    <div class="dropdown-menu">

    <div class="card" style="width: 18rem;">
    <img src="/Assets/Black Panther.jpg" class="card-img-top dropdownImg" alt="...">
    <div class="card-body">
      <p>Copy link:</p>
      <p>https://i.postimg.cc/0NH32qBy/Black-Panther.jpg</p>
    </div>
  </div>

  <div class="card" style="width: 18rem;">
  <img src="/Assets/DarkCrisis.jpg" class="card-img-top dropdownImg" alt="...">
  <div class="card-body">
    <p>Copy link:</p>
    <p>https://i.postimg.cc/LXYWJ0cB/Dark-Crisis.jpg</p>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="/Assets/Fairyland.jpg" class="card-img-top dropdownImg" alt="...">
  <div class="card-body">
    <p>Copy link:</p>
    <p>https://i.postimg.cc/cCf5mt4v/Fairyland.jpg</p>
  </div>
</div>

    </div>
  </div>
</div>

</div>


<div class="row">

    <h6>Book Title</h6>

    <div class="col">

        <input placeholder="Insert Title"></input>

    </div>
    
    <div class="col">
        <div class="dropdown">
            <button class="btn btn-sm btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false"></button>
            <div class="dropdown-menu">
                  <h5>Copy Title:</h5>
                  <h6>Black Panther</h6>
                  <h6>Dark Crisis</h6>
                  <h6>Fairyland</h6>
            </div>
        </div>
    </div>

</div>

<div class="row">

<h6>Price</h6>

<div class="col">

<input placeholder="Insert Price"></input>

</div>

    </div>

`

    