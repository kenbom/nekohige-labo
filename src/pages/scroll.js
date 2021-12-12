import React from "react"
import { useState } from "react"
import loader from "../assets/infinite-scroll/loader.svg"

const Scroll = () => {
  let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  console.log(photosArray)
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside <a>, then put both inside imageContainer Element
    // item.appendChild(img);
    // imageContainer.appendChild(item);
  });
}


// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
  console.log(window.innerHeight+1000);
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
    getPhotos();
    console.log('load more');
  }
});
return(
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Infinite Scroll</title>
          <link rel="icon" type="image/png" href="https://s2.googleusercontent.com/s2/favicons?domain=www.jacinto.design" />
          <link rel="stylesheet" href="style.css" />
          {/* Title */}
          <h1>Unsplash API - Infinite Scroll</h1>
          <button onClick={getPhotos}>get photos</button>
          {/* Loader */}
          <div className="loader" id="loader" hidden>
            <img src={loader} alt="Loading" />
          </div>
          {/* Image Container */}
          <div className="image-container" id="image-container" />
        </div>
      );
    }

export default Scroll
