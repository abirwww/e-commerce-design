// scripts.js
document.getElementById('placeOrderButton').addEventListener('click', function() {
    document.getElementById('paymentPopup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('paymentPopup').style.display = 'none';
});

document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('paymentPopup').style.display = 'none';
});



function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }



