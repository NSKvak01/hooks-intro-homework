import React from "react"
import './App.css';
import HooksObject from "./hooks/Object"

function App() {
  const {value:username, onChange:usernameOnChange, clearInput:clearUsernameInput} = HooksObject("")
  const {value:password, onChange:passwordOnChange, clearInput:clearPasswordInput} = HooksObject("")
  const {value:email, onChange:emailOnChange, clearInput:clearEmailInput} = HooksObject("")

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
