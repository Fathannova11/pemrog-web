/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
*/
//import './App.css'
import SimpleCard from './components/SimpleCard'
import InlineStyleCard from './components/InlineStyleCard'

function App() {

  return (
    <div>

        <h1>React Styling Practice</h1>

        <SimpleCard
          title="Card 1"
          description="Ini adalah card pertama tanpa styling"
        />
        <SimpleCard
          title="Card 2"
          description="Ini adalah card kedua tanpa styling"
        />

        <InlineStyleCard title="Card Inline" description="Dengan inline style"/>
        <InlineStyleCard
          title="Card Inline Biru"
          description="Background Biru Muda"
          bgColor="#e3f2fd"
        />    
    </div>
  )
}

export default App
