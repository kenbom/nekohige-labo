import React from "react"
import { useState } from "react"

const Scroll = () => {
  const x = "Test"
  const [testP, setTestP] = useState("not yet")
  const [innerH, setInnerH] = useState(0)
  const [moveX, setMoveX] = useState(0)
  const [moveY, setMoveY] = useState(0)
  const [scrolledY, setScrolledY] = useState(0)
  const showTestP= () => {setTestP('Changed')} 
  const showAlert = () => { alert("click done")}
  const showWinSize = () => {setInnerH(window.innerHeight)}
  const moveHandler = (e) => {
    setMoveX(e.clientX)
    setMoveY(e.clientY)
  }
  const scrollHandler = () => {
    setScrolledY(window.scrollY)
  }
  console.log(window.scrollY)

  return (
    <div onMouseMove= {moveHandler} onScroll={scrollHandler}  style={{width: 400 , height:1000} }>
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
      <p>Mouse MoveX: {moveX}</p>
      <p>Mouse MoveY: {moveY}</p>
      <p>Scroll MoveY: {scrolledY}</p> 
    </div>
  )
}

export default Scroll
