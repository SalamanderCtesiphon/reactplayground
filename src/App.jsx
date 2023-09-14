import './App.css'
import Greeting from './components/Greeting'
import { FavoriteFood } from './components/MoreComponents'
import { FavoriteDrink } from './components/MoreComponents'
import Button from './components/Button'
import Animal from './components/Animal'

function App() {

 
  

  return (
    <>
      <Greeting />
      <FavoriteFood />
      <FavoriteDrink />
      <Button  />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button fontSize={20} />
      <Animal />
    </>
  )
}

export default App
