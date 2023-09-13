import './App.css'
import Greeting from './components/Greeting'
import { FavoriteFood } from './components/MoreComponents'
import { FavoriteDrink } from './components/MoreComponents'

function App() {

  return (
    <>
      <Greeting />
      <FavoriteFood />
      <FavoriteDrink />
    </>
  )
}

export default App
