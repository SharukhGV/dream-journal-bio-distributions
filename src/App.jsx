import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import dreamjournalbio from "./dreamjournalbio.png"
import WindowsDownload from './components/WindowsDownload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <img  src={dreamjournalbio}></img>
      {/* <h1>Dream Journal Bio</h1> */}

      <div className="card">
       <WindowsDownload/>
       <div>Windows Desktop Version 10+</div>
       <br></br>
       <button><a href='https://snapcraft.io/dream-journal-bio'>SnapCraft Store Installation Page</a></button>
       <div>For Various Linux Distros</div>

      </div>
  
     
    </>
  )
}

export default App
