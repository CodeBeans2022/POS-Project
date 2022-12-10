fetch('../Data/data.json')
.then((response) => {
    return response.json();
})
.then((data) => {
    localStorage.setItem('data', JSON.stringify(data));
});

let dataJson = JSON.parse(localStorage.getItem('data'))
console.log(dataJson)

let newProduct = [];
localStorage.setItem('checkoutLocalStorage', JSON.stringify(newProduct))

// let newProduct = JSON.parse(localStorage.getItem('checkoutLocalStorage'));

// Object.keys(addItem).forEach((item) => {
//     addItem[item].addEventListener('click', (e) => {
//         console.log('click')
//         console.log(data[item]);
//         newProduct.push(data[item]);
//         localStorage.setItem('checkoutLocalStorage', JSON.stringify(newProduct));
//         alert('Item Added To Checkout!')
//         })
// })

let alertUser = document.querySelector('#alertUser');

alertUser.addEventListener('click', (e) => {
    alert('Please purchase item before returning to home Page as your selection will clear and you will have to select items again. Our Development team is sorting out the bug issue. Expect an update soon :)!')
})