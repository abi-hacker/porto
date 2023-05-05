// const toggle = document.getElementById('toggleDark');
// const body = document.querySelector('body');

// toggle.addEventListener('click', function(){
//     this.classList.toggle('bi-brightness-high-fill');
//     if(this.classList.toggle('bi-moon')){
//         body.style.background = 'white';
//         body.style.color = 'black';
        
//         body.style.transition = '2s';
//     }else{
//         body.style.background = 'black';
//         body.style.color = 'white';
//         body.style.card.background='black';
//         body.style.transition = '2s';
//     }
// });

// ScrollReveal({ 
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay:200  
// });

// ScrollReveal().reveal('.profcont, h2', { origin: 'top' });
function validateEmail(email) {
    // Define a regular expression to match fdvalid email addresses
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email address against the regular expression
    if (regex.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage:
  var emailInput = document.getElementById("email");
  var email = emailInput.value;
  
  if (validateEmail(email)) {
    // Email is valid, do something
  } else {
    // Email is not valid, display an error message
  }