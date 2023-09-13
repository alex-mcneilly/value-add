import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './va-components/NavBar'
import Dashboard from './va-pages/Dashboard'
import Tickets from './va-pages/Tickets'
import CategoriesContext from './context'

const App = () => {
  const [categories, setCategories] = useState(null)
  const value = { categories, setCategories}

  return (
    <div className="App">
      <CategoriesContext.Provider value={ value }>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/ticket' element={<Tickets/>} />
            <Route path='/ticket/:id' element={<Tickets editMode={true}/>}/>
          </Routes>
        </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  );
}

export default App;
