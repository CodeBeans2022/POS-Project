let newProduct = JSON.parse(localStorage.getItem('myItemData'));
let addToCheckout = document.querySelector('#addToCheckout');
console.log(newProduct)
Object.keys(newProduct).forEach((item) => {   
    if (newProduct[item]){

        addToCheckout.innerHTML +=
        `
        <div class="col-sm-5 card" id="addItem">
        <h6>ID. ${newProduct[item].id}</h6>
                    <img src=${newProduct[item].image} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${newProduct[item].bookTitle}</h5>
                            <h6 class="card-text">R${newProduct[item].price}</h6>
                        </div>
                </div>

        `
    };
})  

let itemData = JSON.parse(localStorage.getItem('myItemData'));

console.log(itemData)

let nameOfItems = document.querySelector('#nameOfItems');

Object.keys(itemData).forEach((item) => {
    if(itemData[item]){
        nameOfItems.innerHTML +=
        `
        <h6>${itemData[item].bookTitle}</h6>
        `
    }
})

let priceOfItems = document.querySelector('#priceOfItem');

Object.keys(itemData).forEach((item) => {
    if(itemData[item]){
        priceOfItems.innerHTML +=
        `
        <h6>R${itemData[item].price}</h6>
        `
    }
})

let totalOfItems = document.querySelector('totalOfItems');