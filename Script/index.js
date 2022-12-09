fetch('../Data/data.json')
.then((response) => {
    return response.json();
})
.then((data) => {
    localStorage.setItem('data', JSON.stringify(data));
});

let dataJson = JSON.parse(localStorage.getItem('data'))
console.log(dataJson)

// let newProduct = [];
// localStorage.setItem('myItemData', JSON.stringify(newProduct))