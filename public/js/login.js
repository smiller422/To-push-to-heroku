//pulled in from handlebars

// form goes here - type in your id and click submit- query the id to teh route

//

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    // const email = document.querySelector('#email-login').value.trim();
    const userId = document.querySelector('#userId-login').value.trim();
  
    if (userId) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/login`, {
        method: 'POST',
        body: JSON.stringify({ userId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/menu');
      } else {
        alert(response.statusText);
      }
    }
  };
  

  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
 //from activity mini proj  28 public/js/login.js
  