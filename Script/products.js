let data = JSON.parse(localStorage.getItem('data'));
let marvelDisplay = document.querySelector('#Marvel');
let dcDisplay = document.querySelector('#DC');
let modalDisplay = document.querySelector('#Modal');

Object.keys(data).forEach((item) => {
    if (data[item] && data[item].universe == 'Marvel') {
        marvelDisplay.innerHTML +=
            `                                                                                                                   
            <div class="card" style="width: 18rem;">
                <img src=${data[item].image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data[item].bookTitle}</h5>
                        <h6 class="card-text">R${data[item].price}</h6>
                        <button type="button" class="btn btn-primary" id="addItem">Add</button>
                    </div>
            </div>
            `
    }
    if (data[item] && data[item].universe == 'DC') {
        dcDisplay.innerHTML +=
            `
                <div class="card" style="width: 18rem;">
                    <img src=${data[item].image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data[item].bookTitle}</h5>
                        <h6 class="card-text">R${data[item].price}</h6>
                        <button type="button" class="btn btn-primary" id="addItem">Add</button>
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
                <div class="card" style="width: 18rem;">
                    <img src=${data[item].image} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data[item].bookTitle}</h5>
                            <h6 class="card-text">R${data[item].price}</h6>
                            <button type="button" class="btn btn-primary" id="addItem">Add</button>
                        </div>
                </div>
        `
    }
})



// Event Listener for Add Button 
let newProduct = JSON.parse(localStorage.getItem('myItemData'));
let addItem = document.querySelectorAll('#addItem')
let addItemToCart = document.querySelectorAll('#addItemToCart')

Object.keys(addItem).forEach((item) => {
    addItem[item].addEventListener('click', (e) => {
        console.log('click')
        console.log(data[item]);
        newProduct.push(data[item]);
        localStorage.setItem('myItemData', JSON.stringify(newProduct));
        
        })
})


// let dataJson = fetch('../Data/data.json')
// .then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data);
//     localStorage.setItem('data', JSON.stringify(data));
//     dataJson = JSON.parse(localStorage.getItem('data'))
// })
// .then((data) => {
//     let marvelDisplay = document.querySelector('#Marvel');
//     let dcDisplay = document.querySelector('#DC');
//     let modalDisplay = document.querySelector('#Modal');
//     Object.keys(data).forEach((item) => {
//         if (data[item] && data[item].universe == 'Marvel') {
//             marvelDisplay.innerHTML +=
//                 `
//         <div class="card" style="width: 18rem;">
//             <img src=${data[item].image} class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${data[item].bookTitle}</h5>
//                     <h6 class="card-text">R${data[item].price}</h6>
//                     <button type="button" class="btn btn-primary">Add</button>
//                 </div>
//         </div>
//         `
//         }
//         if (data[item] && data[item].universe == 'DC') {
//             dcDisplay.innerHTML +=
//                 `
//                 <div class="card" style="width: 18rem;">
//                 <img src=${data[item].image} class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">${data[item].bookTitle}</h5>
//                         <h6 class="card-text">R${data[item].price}</h6>
//                         <button type="button" class="btn btn-primary">Add</button>
//                     </div>
//             </div>
//         `
//         }
//     })
// })


