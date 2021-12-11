import React from "react"
import { useState } from "react"

const Scroll = () => {
  const x = "test"
  const [testP, setTestP] = useState("not yet")
  const [innerH, setInnerH] = useState(0)
  const showTestP= () => {setTestP('ok')} 
  const showAlert = () => { alert("click done")}
  const showWinSize = () => {setInnerH(window.innerHeight)}
  return (
    <div>
      <p>{x}</p>
      <button onClick={showTestP} style={{ margin: 10 }}>
        ChangeText
      </button>
      <button onClick={showAlert} style={{ margin: 10 }}>
        ShowAlert
      </button>
      <button onClick={showWinSize} style={{ margin: 10 }}>
        GetWinSize
      </button>
      <p>{testP}</p>
      <p>Window Height: {innerH}</p>
    </div>
  )
}

export default Scroll
