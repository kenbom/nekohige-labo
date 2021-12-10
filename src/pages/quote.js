import React from "react"
import "../assets/css/main.css"
import { useState } from "react"
import styled from "styled-components"

const Quote = () => {
  const [author, setAuthor] = useState("")
  const [sentence, setSentence] = useState("Quote Generator")
  const [showLoader, setShowLoader] = useState(false)
  const quoteText = ""
  const loading = () => {
    setShowLoader(true)
  }
  const complete = () => {
    setShowLoader(false)
  }
  async function getQuote() {
    loading()
    const proxyUrl = "https://whispering-tor-04671.herokuapp.com/"
    const apiUrl =
      "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
    try {
      const response = await fetch(proxyUrl + apiUrl)
      const data = await response.json()
      console.log(data)
      // If Author is blank, add 'Unknown'
      if (data.quoteAuthor === "") {
        setAuthor("unknown")
      } else {
        setAuthor(data.quoteAuthor)
      }
      // Reduce font size for long quotes
      // if (data.quoteText.length > 120) {
      //   quoteText.classList.add("long-quote")
      // } else {
      //   // quoteText.classList.remove("long-quote")
      //   setSentence(data.quoteText)
      // }

      data.quoteText ? setSentence(data.quoteText) : setSentence("N.A")

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
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" //これfont-awesomeのSVGみたい
      />
      {/* <link rel="stylesheet" href="style.css" /> */}
      <Ssection show={showLoader}>
        <div className="whole-container">
          <div className="quote-container" id="quote-container">
            {/* Quote */}
            <div className="quote-text">
              <i className="fas fa-quote-left" />
              <span id="quote">{sentence}</span>
            </div>
            {/* Author */}
            <div className="quote-author">
              <span id="author">{author}</span>
            </div>
            {/* Buttons */}
            <div className="button-container">
              <button
                className="twitter-button"
                id="twitter"
                title="Tweet This!"
              >
                <i className="fab fa-twitter" />
              </button>
              <button id="new-quote" onClick={getQuote}>
                New Quote
              </button>
            </div>
          </div>
          {/* Loader */}
          {/* <div className={showLoader? "loader": ""} id="loader" /> */}
          <div
            className={showLoader ? "loader" : ""}
            id={showLoader ? "loader" : ""}
          />
          {/* Script */}
        </div>
      </Ssection>
    </div>
  )
}

const Ssection = styled.section`
  .whole-container {
    color: pink;
  }

  .quote-container {
    display: ${props => (props.show ? "none" : "block")};
    width: auto;
    max-width: 900px;
    padding: 20px 30px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
  }

  & .quote-text {
    font-size: 2.75rem;
  }

  .long-quote {
    font-size: 2rem;
  }

  & .fa-quote-left {
    font-size: 4rem;
  }

  .quote-author {
    margin-top: 15px;
    font-size: 2rem;
    font-weight: 400;
    font-style: italic;
  }

  .button-container {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }

  & button {
    cursor: pointer;
    font-size: 1.2rem;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background: rgb(128, 118, 185);
    outline: none;
    padding: 0.5rem 1.8rem;
    box-shadow: 0 0.3rem rgba(128, 118, 185, 0.65);
  }

  button:hover {
    filter: brightness(110%);
  }

  button:active {
    transform: translate(0, 0.3rem);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
  }

  .twitter-button:hover {
    color: #38a1f3;
  }

  .fa-twitter {
    font-size: 1.5rem;
  }

  /* Loader */
  .loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid rgb(128, 118, 185);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Media Query: Tablet or Smaller */
  @media screen and (max-width: 1000px) {
    .quote-container {
      margin: auto 10px;
    }

    .quote-text {
      font-size: 2.5rem;
    }
  }
`

export default Quote
