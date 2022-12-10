let data = JSON.parse(localStorage.getItem('data'))

let tableDisplay = document.querySelector('tbody')
Object.keys(data).forEach((item) => {
   if(data[item]) {
            tableDisplay.innerHTML +=
            `
            <tr id="editItemUpdate">
            <td id="tableItemID">${data[item].id}</td>
            <td id="tableItemBookTitle">${data[item].bookTitle}</td>
            <td id="tableItemPrice">R${data[item].price}</td>
            <td>

            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#${data[item].stringId}"><i class="fa-sharp fa-solid fa-pen-to-square"></i></button>
            <!-- Modal 1 -->
            <div class="modal fade" id="${data[item].stringId}" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5">Edit Comic or Graphic Novel</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="container modal-body" id="modalBodyForEdit">
        
                            <div class="row">
        
                                <h6>Picture</h6>
        
                                <div class="col">
                                    <input placeholder="Insert Link" id="linkInput"></input>
                                </div>
                                <div class="col">
                                    <div class="dropdown">
                                        <button class="btn btn-sm btn-danger dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false"></button>
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
        
                                    <input placeholder="Insert Title" id="titleInput"></input>
        
                                </div>
        
                                <div class="col">
                                    <div class="dropdown">
                                        <button class="btn btn-sm btn-danger dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false"></button>
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
        
                                    <input placeholder="Insert Price" id="priceInput"></input>
        
                                </div>
        
                            </div>
        
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" id="applyChanges">Save Changes</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            </td>
            <td><button type="button" id="${data[item].stringId}" class="btn btn-danger deleteBtn"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
            </tr>

            `
        }
    })

let modalEdit = document.querySelector('#modalBodyForEdit')
let applyChanges = [...document.querySelectorAll('#applyChanges')]
console.log(applyChanges)

let tableItemID = document.querySelector('#tableItemID')
let tableItemBookTitle = document.querySelector('#tableItemBookTitle')
let tableItemPrice = document.querySelector('#tableItemPrice')
let editItemUpdate = document.querySelector('#editItemUpdate')

Object.keys(applyChanges).forEach((item) => {
  applyChanges[item].addEventListener('click', (e) =>{

    console.log(applyChanges[item]);

    let newObjectLink = [...document.querySelectorAll(`#linkInput`)]
    let newObjectTitle = [...document.querySelectorAll(`#titleInput`)]
    let newObjectPrice = [...document.querySelectorAll(`#priceInput`)]
        console.log(newObjectLink);
        console.log(newObjectTitle);
        console.log(newObjectPrice);
  
        switch(newObjectLink[item]){
          case newObjectLink[item]: data[item].image = newObjectLink[item].value;
          localStorage.setItem('data', JSON.stringify(data));
          console.log(data[item].image)
          break;
        }

        switch(newObjectTitle[item]){
          case newObjectTitle[item]: data[item].bookTitle = newObjectTitle[item].value;
          localStorage.setItem('data', JSON.stringify(data));
          console.log(data[item].bookTitle)
          break;
        }

        switch(newObjectPrice[item]){
          case newObjectPrice[item]: data[item].price = newObjectPrice[item].value;
          localStorage.setItem('data', JSON.stringify(data));
          console.log(data[item].price)
          break;

        }
        location.reload();
})
})

let deleteItem = [...document.querySelectorAll('.deleteBtn')];

Object.keys(deleteItem).forEach((item) => {
  deleteItem[item].addEventListener('click', (e) => {
    let itemDeleted = item;

    console.log(item)

    switch(itemDeleted[item]) {
      case deleteItem[item].stringId == data[item].stringId: 
      data.splice(itemDeleted, 1) 
      localStorage.setItem('data', JSON.stringify(data));
      location.reload();
      break;

      case deleteItem[item].stringId !== data[item].stringId:
        console.log('reached')
      break;
      default:
        console.log('sometext')
    }
  })
})

let newProductAdded = function (id, price, bookTitle,image, category){
  this.id = id;
  this.price = price;
  this.bookTitle =  bookTitle;
  this.image = image;
  this.category = category;
};

let productAdded = document.querySelector('#addNewItem')
productAdded.addEventListener('click', (e) => {
  
})





    