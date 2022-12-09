let newProduct = JSON.parse(localStorage.getItem('myItemData'));
let addToCheckout = document.querySelector('#addToCheckout');
console.log(newProduct)
Object.keys(newProduct).forEach((item) => {   
    if (newProduct[item]){

        addToCheckout.innerHTML +=
        `
        <div class="col" id="addItem">

        <div class="card" style="width: 18rem;">
                    <img src=${newProduct[item].image} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${newProduct[item].bookTitle}</h5>
                            <h6 class="card-text">R${newProduct[item].price}</h6>
                            <button type="button" class="btn btn-primary" id="addItem">Add</button>
                        </div>
                </div>

        </div>
        `
    };
})  