// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];

function addToCart(id) {
  //checking if product already exist in cart
  if (cart.some((item) => item.id === id)) {
    //Checks if the cart already contains item clicked on
    alert("Product already in cart!"); //alerts user already in cart
  } else {
    const item = products.find((product) => product.id === id); //will add item to cart if not already in

    console.log(item);
    cart.push({
      ...item,
      total: 1,
    });
    console.log(cart);

    updateCart(); //after adding to cart will invoke the update cart function
    updateTotal();
  }
}

function updateCart() {
  var items = 0;
  var carttable = "";
  cart.forEach((product) => {
    items = cart.length;
    carttable +=
      "<tr><td>" +
      product.name +
      "</td><td>$" +
      product.price +
      "</td><td>" +
      product.total +
      "</td><td>";
  });
  //  document.getElementById("total").innerHTML = total;
  document.getElementById("carttable").innerHTML = carttable;
  document.getElementById("itemsquantity").innerHTML = items;
}
function updateTotal() {
  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.total;
    document.getElementById("total").innerHTML = totalPrice;
  });
}
//function removeItem() {
//  cart = cart.filter((item) => item.id !== id);
//
//  updateCart();
//}
function emptyCart() {
  console.log(cart);
  cart = [];
  document.getElementById("total").innerHTML = "";
  document.getElementById("carttable").innerHTML = "";
  document.getElementById("itemsquantity").innerHTML = "";
}
