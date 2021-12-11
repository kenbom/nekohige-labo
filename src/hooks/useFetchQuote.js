import React from 'react'
import {useState} from 'react'

export const useFetchQuote = () => {
    const [author, setAuthor] = useState("")
    const [sentence, setSentence] = useState("Quote Generator")
    const [showLoader, setShowLoader] = useState(false)
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
          //getQuote()
        }}
    return (
      {getQuote, author, sentence, showLoader}
    )
}
