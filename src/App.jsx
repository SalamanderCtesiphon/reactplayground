import './App.css'
import Greeting from './components/Greeting'
import { FavoriteFood } from './components/MoreComponents'
import { FavoriteDrink } from './components/MoreComponents'
import Button from './components/Button'

function App() {

  return (
    <>
      <Greeting />
      <FavoriteFood />
      <FavoriteDrink />
      <Button text="Click me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click me!" color="blue" fontSize={20} />
    </>
  )
}

export default App
