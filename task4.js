function highlightImage(image) {
  // Remove the 'highlighted' class from all images
  var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('highlighted');
  }

  // Add the 'highlighted' class to the clicked image
  image.classList.add('highlighted');
}

function createCard() {
  // Get the selected image value
  var selectedImage = document.querySelector('input[name="image"]:checked').value;

  // Get the inputted text value
  var cardText = document.querySelector('input[name="cardText"]').value;

  // Open a new window with the highlighted image and card text
  var newWindow = window.open('', '', 'width=400,height=400');
  newWindow.document.write('<html><head><title>Customized Card</title></head><body>');
  
  newWindow.document.write('<img src=" '+  selectedImage + '" alt="Selected Card" style="width:300px" />');
  // console.log(selectedImage);
  newWindow.document.write('<h2>' + cardText + '</h2>');
  newWindow.document.write('<button> close </button>')
  // newWindow.document.close();
  newWindow.document.write('</body></html>');
}