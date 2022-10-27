import React from "react"
import { useState } from "react"
import Button from "./Button"
import "./Calculator.css"

export default function Calculator() {
  const [input, setInput] = useState("")
  const validInput = "1234567890.÷*-+/=,".split("")
  const operators = "÷*-+".split("")
  const conversions = {
    ",": ".",
    // "/": "÷",
  }

  // This is what happens when you forget regex exists...
  function removeInvalidInput(input) {
    const inputArray = input.split("")
    const resultArray = []
    inputArray.forEach((i) => {
      validInput.forEach((j) => {
        if (i === j) {
          if (i === "=") {
            return false
          }
          if (i in conversions) {
            i = conversions[i]
          }
          resultArray.push(i)
        }
      })
    })
    return resultArray.join("")
  }

  function manualInput(event) {
    setInput(removeInvalidInput(event.target.value))
  }

  function addSymbol(symbol) {
    setInput(input + "" + symbol)
  }

  function calculate() {
    setInput(Function('return ' + input)())
  }

  return (
    <div>
      <input type="text" onChange={(event)=>{manualInput(event)}} value={input}/>
      <table>
        <tr>
          <td><Button onClick={()=>{addSymbol(7)}}>7</Button></td>
          <td><Button onClick={()=>{addSymbol(8)}}>8</Button></td>
          <td><Button onClick={()=>{addSymbol(9)}}>9</Button></td>
          <td><Button onClick={()=>{addSymbol("/")}}>÷</Button></td>
        </tr>
        <tr>
          <td><Button onClick={()=>{addSymbol(4)}}>4</Button></td>
          <td><Button onClick={()=>{addSymbol(5)}}>5</Button></td>
          <td><Button onClick={()=>{addSymbol(6)}}>6</Button></td>
          <td><Button onClick={()=>{addSymbol("*")}}>x</Button></td>
        </tr>
        <tr>
          <td><Button onClick={()=>{addSymbol(1)}}>1</Button></td>
          <td><Button onClick={()=>{addSymbol(2)}}>2</Button></td>
          <td><Button onClick={()=>{addSymbol(3)}}>3</Button></td>
          <td><Button onClick={()=>{addSymbol("-")}}>-</Button></td>
        </tr>
        <tr>
          <td><Button onClick={()=>{addSymbol(0)}}>0</Button></td>
          <td><Button onClick={()=>{addSymbol(".")}}>.</Button></td>
          <td><Button onClick={calculate}>=</Button></td>
          <td><Button onClick={()=>{addSymbol("+")}}>+</Button></td>
        </tr>
      </table>
    </div>
  )
}
