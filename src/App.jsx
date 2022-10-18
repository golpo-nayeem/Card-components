import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import data from './data'

function App() {
  const [count, setCount] = useState(0);
  const card= data.map(x=>{
    return <Card
    key={x.id}
    img={x.coverImg}
    openSpots={x.openSpots}
    rating={x.stats.rating}
                reviewCount={x.stats.reviewCount}
                location={x.location}
                title={x.title}
                price={x.price}
    
    />
  })

  return (
      <div>
        
      <Navbar />
      <Hero />
      <section className='card---display'>
      {card}
      </section>

      </div>
  )
}

export default App
