import './App.css'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'

function App () {
  return (
    <div className='App'>
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
      <hr />
      
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      
      
    </div>
  )
}

export default App
