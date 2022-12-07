fetch('../Data/data.json')
.then((response) => {
    return response.json()
})
.then((data) => {
    let tableDisplay = document.querySelector('tbody')
    Object.keys(data).forEach((item) => {
        if(data[item]) {
            tableDisplay.innerHTML +=
            `
            <tr>
            <td>${data[item].id}</td>
            <td>${data[item].bookTitle}</td>
            <td>R${data[item].price}</td>
            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-sharp fa-solid fa-pen-to-square"></i></button></td>
            </tr>
            `
        }
    })
})