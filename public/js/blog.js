// Define an asynchronous function that handles form submissions
const newFormHandler = async (event) => {
  event.preventDefault();

  const blogTitle = document.querySelector('#project-title').value.trim();
  const blogMessage = document.querySelector('#project-message').value.trim();


  try {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title: blogTitle, message: blogMessage }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      throw new Error('Failed to create project');
    }
  } catch (err) {
    alert(err.message);
  }
};



//   if (blogTitle && blogMessage) {
//     const response = await fetch(`/api/blogs`, {
//       method: 'POST',
//       body: JSON.stringify({ blogTitle, blogMessage }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

// Add the newFormHandler function as an event listener for form submissions on a specific form element
document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);
