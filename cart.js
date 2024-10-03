let cart = []; // Global cart array

document.addEventListener('DOMContentLoaded', () => {

  // Form submission to add item to cart
  document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productQuantity = parseInt(document.getElementById('productQuantity').value);
    const productComment = document.getElementById('productComment').value;

    // Add item to cart array
    cart.push({
      name: productName,
      price: productPrice,
      quantity: productQuantity,
      comment: productComment,
    });

    // Display a pop-up notification
    alert(`${productName} added to the cart!`);

    // Reset form
    document.getElementById('productForm').reset();
  });

  // Show the cart items
  document.getElementById('viewCartButton').addEventListener('click', function () {
    const cartPopup = document.getElementById('cartPopup');
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
      cartItemsDiv.innerHTML = '<p>Your cart is empty!</p>';
    } else {
      cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
          <p>${item.name} - $${item.price} x ${item.quantity}</p>
          <p>Comment: ${item.comment}</p>
          <button class="delete-btn" data-index="${index}">Delete</button>
          <hr>
        `;
        cartItemsDiv.appendChild(itemDiv);
      });
    }

    cartPopup.classList.remove('hidden');
  });

  // Close cart popup
  document.getElementById('closeCartPopup').addEventListener('click', function () {
    document.getElementById('cartPopup').classList.add('hidden');
  });

  // Event delegation for delete buttons
  document.getElementById('cartItems').addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
      const index = event.target.getAttribute('data-index');
      deleteItem(index);
    }
  });

  // Function to delete item from the cart
  function deleteItem(index) {
    cart.splice(index, 1); // Remove item from cart array
    document.getElementById('viewCartButton').click(); // Refresh the cart view
  }
});

document.getElementById('contactButton').addEventListener('click', function() {
  window.location.href = '/contact_me.html'; //Go to Contact  page
});