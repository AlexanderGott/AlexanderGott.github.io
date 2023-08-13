// Get a reference to the body element
const body = document.body;

function changeBackgroundImage() {
  const currentFileName = location.pathname.split('/').slice(-1)[0];

  if (currentFileName === 'menu.html') {
    body.style.backgroundImage = "url('./assets/menu.jpeg')";
  } else if (currentFileName === 'contactanos.html') {
    body.style.backgroundImage = "url('./assets/contactanos.jpeg')";
  } else {
    body.style.backgroundImage = "url('./assets/gottlogo.png')";
  }
}

// Call the function to change the background image
changeBackgroundImage();