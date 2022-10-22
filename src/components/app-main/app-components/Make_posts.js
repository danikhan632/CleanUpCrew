import React, { useState,useEffect } from "react"

import { Link, useHistory } from "react-router-dom"

function Make_posts() {
    const history = useHistory();
    const [error, setError] = useState("")
    async function go_back() {
        setError("")
    
        try {
          history.push("/");
        } catch {
          setError("Failed to log out")
        }
      }
      function handleSubmit(){
        
      }

  return (
    <div className='make_posts'>
        <h1>Make a new Post!</h1>
        <button onClick={go_back}>Go Back</button>
      
        
    </div>
  )
}

export default Make_posts