const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener ( 'click', () => {
    nav.classList.add('active');

  })  
}
if (close) {
  close.addEventListener ( 'click', () => {
    nav.classList.remove('active');

  })       

}
 


const scriptURL = 'https://script.google.com/macros/s/AKfycbwNCIzI6sT1terNowSVt557vHz_c97KH97wq_dqXzHF69sNXg_wveBVOQ0uA5H1jgdBWw/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
       msg.innerHTML = "Votre message a été correctement envoyé"
       setTimeout(function(){
        msg.innerHTML = ""
       },5000)
       form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".header").removeClass("active");
      }
  });
});


const addToCartButton = document.getElementById("fa-solid fa-cart-shopping cart");

addToCartButton.addEventListener("click", function() {
  // Get the product details
  const productName = document.getElementById("product-name").innerText;
  const productPrice = document.getElementById("product-price").innerText;

  // Create a new object to represent the product
  const product = {
    name: productName,
    price: productPrice
  };

  // Check if the shopping cart already exists in the session storage
  let shoppingCart = JSON.parse(sessionStorage.getItem("lg-bag"));
  if (!shoppingCart) {
    shoppingCart = [];
  }

  // Add the product to the shopping cart
  shoppingCart.push(product);

  // Save the updated shopping cart to the session storage
  sessionStorage.setItem("lg-bag", JSON.stringify(lg-bag));

  // Update the shopping cart count
  updateShoppingCartCount();
});
