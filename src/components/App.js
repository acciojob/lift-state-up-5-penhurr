
import React, { useState } from "react";
import './../styles/App.css';

const Child = ({setIsLoggedIn}) => {

  function handleSubmit(e){
    e.preventDefault()
    setIsLoggedIn(true)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        Username:<input type="text" />
        Password:<input type="text" />
        <button type="submit">Login</button>
      </form>
    </div>
  )

}

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {(!isLoggedIn) && <Child setIsLoggedIn={setIsLoggedIn}/>}
        {(isLoggedIn) && <p>You are logged in!</p>}
    </div>
  )
}

export default App
