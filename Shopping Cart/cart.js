
var carts = [];

function purchaseClicked() {
    alert('Thank you for your purchase');
}

function addToCart() {
    var cartData = {}
    cartData.title = document.getElementsByClassName('itemTitle')[0].innerText;
    cartData.price = document.getElementsByClassName('price')[0].innerText;
    carts.push(cartData);
    sessionStorage.setItem("cart", JSON.stringify(carts))
}
function addItem() {
    var retrieved = JSON.parse(sessionStorage.getItem("cart"));
    for (i = 0; i < retrieved.length; i++) {
        console.log(retrieved[i]);
        var table = document.getElementById("cartDetails");
        var tableBody = table.getElementsByTagName("tbody")[0];
        var newRow = tableBody.insertRow(tableBody.length);
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = retrieved[i].title;
        cell1.className = "cartItem"
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = retrieved[i].price;
        cell2.className = "itemPrice"
        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = "<a href='#' onclick='deleteRec(this)'>X</a>";

    }
}
function deleteRec(data){
    var row = data.parentElement.parentElement;
    document.getElementById("cartDetails").deleteRow(row.rowIndex);
}
function updateTotal() {
    var retrieved = JSON.parse(sessionStorage.getItem("cart"));
    var total = 0;
    for (i = 0; i < retrieved.length; i++) {
        console.log(retrieved[i]);
        var prices = retrieved[i].price;
        //console.log(prices);
        var price = parseFloat(prices.replace('$', ''));
        total += price;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('totalPrice')[0].innerText = '$' + total;
}
