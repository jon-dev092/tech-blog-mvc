// Define an asynchronous function called logout
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};


// Add an event listener for the click event on the button with id "logout"
document.querySelector('#logout').addEventListener('click', logout);
