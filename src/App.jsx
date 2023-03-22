import './App.css'
import FirstScreen from './components/firstScreen'
import React from 'react'

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)

      return _ => {
        window.removeEventListener('resize', handleResize)
      }
  })

  

  return (
    <div>
      <FirstScreen 
        height={dimensions.height}
        width={dimensions.width}
      />
      <p>Rendered at {dimensions.height} by {dimensions.width}</p>
    </div>
  )
}

export default App
