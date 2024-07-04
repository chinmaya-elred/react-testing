import React, { useState } from 'react'

function QueryByText() {
    const [isLoggedIn, setLoggedIn] = useState(true)
  return (
    <div>
        {isLoggedIn ? <button>LogOut</button> : <button>LogIn</button>}
    </div>
  )
}

export default QueryByText