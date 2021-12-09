import React from "react"
import "../assets/css/main.css"
import { useState } from "react"

const QuoteGenerator = () => {
  const loading = () => {
    return true
  }
  const complete = () => {
    return true
  }
  const [author, setAuthor] = useState("TestAuthorBom")
  const [text, setText] = useState("TestTextKen")
  const quoteText = "testText"
  async function getQuote() {
    loading()
    const proxyUrl = "https://whispering-tor-04671.herokuapp.com/"
    const apiUrl =
      "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
    try {
      const response = await fetch(proxyUrl + apiUrl)
      const data = await response.json()
      // If Author is blank, add 'Unknown'
      if (data.quoteAuthor === "") {
        author = setAuthor()
      } else {
        author = data.quoteAuthor
      }
      // Reduce font size for long quotes
      if (data.quoteText.length > 120) {
        quoteText.classList.add("long-quote")
      } else {
        quoteText.classList.remove("long-quote")
      }
      text = setText()
      // Stop Loader, Show Quote
      complete()
    } catch (error) {
      getQuote()
    }
  }
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Quote Generator</title>
      <link
        rel="icon"
        type="image/png"
        href="https://s2.googleusercontent.com/s2/favicons?domain=jacinto.design"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
      />
      <link rel="stylesheet" href="style.css" />
      <div className="quote-container" id="quote-container">
        {/* Quote */}
        <div className="quote-text">
          <i className="fas fa-quote-left" />
          <span id="quote">{text}</span>
        </div>
        {/* Author */}
        <div className="quote-author">
          <span id="author">{author}</span>
        </div>
        {/* Buttons */}
        <div className="button-container">
          <button className="twitter-button" id="twitter" title="Tweet This!">
            <i className="fab fa-twitter" />
          </button>
          <button id="new-quote">New Quote</button>
        </div>
      </div>
      {/* Loader */}
      <div className="loader" id="loader" />
      {/* Script */}
    </div>
  )
}

export default QuoteGenerator
