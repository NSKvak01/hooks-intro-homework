import React from "react"
import './App.css';
import HooksArray from "./hooks/Array"

function App() {
  const [username, usernameOnChange, clearUsernameInput] = HooksArray("")
  const [password, passwordOnChange, clearPasswordInput] = HooksArray("")
  const [email, emailOnChange, clearEmailInput] = HooksArray("")

  function handleOnSubmit(e){
    e.preventDefault()
    clearUsernameInput()
    clearPasswordInput()
    clearEmailInput()
  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input type="text" 
        placeholder="username" 
        value={username} 
        onChange={usernameOnChange}/>
        <input type="text" 
        placeholder="email" 
        value={email} 
        onChange={emailOnChange}/>
        <input type="text" 
        placeholder="password" 
        value={password} 
        onChange={passwordOnChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App
