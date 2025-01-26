import React from 'react'
import Home from "./home"
import Venu from "./venu"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
const App = () => {
  return (
<>
<Router>
      <div className="app h-screen w-full ">
      
        <Routes >
         
          <Route path="/" exact Component={Home} />
          <Route path="/venue" exact Component={Venu} />
       
          {/* <Route path="/register"  element={<Form />} />
          <Route path="/ticket"  Component={Ticket} />
          <Route path="/dashboard"  Component={Dashboard} /> */}
        </Routes>

      </div>
    </Router>
    
</>
    

  )
}

export default App
