const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

// create elements for links photos add to Dom
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;

  photosArray.forEach((photo) => {
    // Create <a> to link to unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    // create <img> for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    // event listener check when each is finish loading
    img.addEventListener("load", checkImagesLoaded);
    // put <img> inside <a> then put both inside imagecontainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// check if all images were loaded
function checkImagesLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

// Unsplash api
const count = 30;
const apikey = "ec5opYFm1K049jEjLG3Wp6CwzWG3eF0Kg2963C4Y8po";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

// Get photo from Unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // catch error
  }
}

// Check to see if scrolling near bottom of the page,load more photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    getPhotos();
    ready = false;
  }
});

// on load
getPhotos();
