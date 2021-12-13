import React from "react"
import { useState } from "react"
import loader from "../assets/infinite-scroll/loader.svg"
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// }) 

const Scroll = () => {
  let photosArray = [];
  // const [objectZero, setObjectZero] = useState({})
  const [info, setInfo] = useState([])
  // const [apiKey, setApiKey] = useState('')

// Unsplash API
const count = 10;
const apiKey = process.env.API_KEY
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// console.log(apiKey)
// console.log(process.env.API_KEY)
// Helper Function to Set Attributes on DOM Elements
// function setAttributes(element, attributes) {
//   for (const key in attributes) {
//     element.setAttribute(key, attributes[key]);
//   }
// }

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  console.log(photosArray)
  const data = photosArray.map((photo) => ({
    id:photo.id,
    url:photo.urls.regular,
    href:photo.links.html,
  }))
  setInfo(data)
  // Run function for each object in photosArray
  // photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
  //   const item = document.createElement('a');
  //   setAttributes(item, {
  //     href: photo.links.html,
  //     target: '_blank',
  //   });
  //   // Create <img> for photo
  //   const img = document.createElement('img');
  //   setAttributes(img, {
  //     src: photo.urls.regular,
  //     alt: photo.alt_description,
  //     title: photo.alt_description,
  //   });
  //   // Put <img> inside <a>, then put both inside imageContainer Element
  //   item.appendChild(img);
  //   imageContainer.appendChild(item);
  //   setObjectZero(photo.urls.regular)
  // });
}


// Get photos from Unsplash API
async function getPhotos() {
  try {
    console.log(apiUrl)
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}

// Check to see if scrolling near bottom of page, Load More Photos
// window.addEventListener('scroll', () => {
//   console.log(window.innerHeight+1000);
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
//     getPhotos();
//     console.log('load more');
//   }
// });
return (
  <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infinite Scroll</title>
    <link
      rel="icon"
      type="image/png"
      href="https://s2.googleusercontent.com/s2/favicons?domain=www.jacinto.design"
    />
    <link rel="stylesheet" href="style.css" />
    {/* Title */}
    <h1>Unsplash API - Infinite Scroll</h1>
    <button onClick={getPhotos}>Get photos</button>
    {/* Loader */}
    <div className="loader" id="loader" hidden>
      <img src={loader} alt="Loading" />
    </div>
    {/* Image Container */}
    <div className="image-container" id="image-container">
      {info.map((photo)=>(
        <img key= {photo.id} src={photo.url} alt={photo.href}/>
      ))}
      {/* <img src={data} /> */}
    </div>
  </div>
)
    }

export default Scroll
