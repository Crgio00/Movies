import './App.css'
import ListMovie from './components/ListMovie'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
    <div>
      <header>
        <h1>Películas</h1>
      </header>
      <main>
        <ListMovie/>
      </main>
    </div>
      
    </>
  )
}

export default App
