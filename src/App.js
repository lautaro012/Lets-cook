import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing'
import RecipeDetails from './components/RecipeDetails/RecipeDetails'
import CreateRecipe from './components/CreateRecipe/CreateRecipe'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (<div className='App'>
    
    <Router>
      <Routes>
        <Route exact path= '/' element={<Landing></Landing>}></Route>

        <Route path='/home' element={<Home/>}></Route>

        <Route path= '/CreateRecipe' element={<CreateRecipe></CreateRecipe>}></Route>

        <Route path='/Recipe/:id' element={<RecipeDetails></RecipeDetails>} ></Route>
      </Routes>
    </Router>


  </div>

  );
}

export default App;
