let data = JSON.parse(localStorage.getItem('data'));

let marvelDisplay = document.querySelector('#Marvel');
Object.keys(data).forEach((item) => {
    if (data[item] && data[item].category == 'Marvel') {
        marvelDisplay.innerHTML +=
            `                                                                                                                   
            <div class="card mb-4">
                <img src=${data[item].image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data[item].bookTitle}</h5>
                        <h6 class="card-text">R${data[item].price}</h6>
                        <button type="button" class="btn btn-danger" id="addItem">Add</button>
                    </div>
            </div>
            `
    }
})

let dcDisplay = document.querySelector('#DC');
Object.keys(data).forEach((item) => {
    if (data[item] && data[item].category == 'DC') {
        dcDisplay.innerHTML +=
            `
                <div class="card mb-4">
                    <img src=${data[item].image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data[item].bookTitle}</h5>
                        <h6 class="card-text">R${data[item].price}</h6>
                        <button type="button" class="btn btn-danger" id="addItem">Add</button>
                    </div>
                </div>
            `
    }
})


let graphicNovelDisplay = document.querySelector('#Novel');
Object.keys(data).forEach((item) => {
    if (data[item] && data[item].category == 'Graphic Novel') {
        graphicNovelDisplay.innerHTML +=
            `
                <div class="card mb-4">
                    <img src=${data[item].image} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data[item].bookTitle}</h5>
                            <h6 class="card-text">R${data[item].price}</h6>
                            <button type="button" class="btn btn-danger" id="addItem">Add</button>
                        </div>
                </div>
        `
    }
})

// For Cart Button 
// let addItem = document.querySelectorAll('#addItem')
// let addItemToCart = document.querySelectorAll('#addItemToCart')

// Event Listener for Add Button 
let newProduct = JSON.parse(localStorage.getItem('checkoutLocalStorage'));

Object.keys(addItem).forEach((item) => {
    addItem[item].addEventListener('click', (e) => {
        console.log('click')
        console.log(data[item]);
        newProduct.push(data[item]);
        localStorage.setItem('checkoutLocalStorage', JSON.stringify(newProduct));
        alert('Item Added To Checkout!')
        })
})



// let itemData = JSON.parse(localStorage.getItem('data'));

// Object.keys(addItem).forEach((item) => {
//     addItem[item].addEventListener('click', (e) => {
//         itemData.push(data[item]);
//         localStorage.setItem('data', JSON.stringify(itemData));
//     })
// })





