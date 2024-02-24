import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/main'
import Projects from './components/Projects'


function App() {

  return (
    <div>
        <Sidenav />
        <Main   />
        <Projects />
    </div>
  )
}

export default App
