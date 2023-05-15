import {
  Switch,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Favorites from '../pages/Favorites'
import Header from '../components/Header'
import Form from '../pages/Form'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route exact path="/" element={<Home />}>HOME</Route>
          <Route path="/about" element={<About />}>About</Route>
          <Route path="/favorites" element={<Favorites />}>Favorites</Route>
          <Route path="/form" element={<Form />}>Form</Route>
      </Routes>
    </div>
  );
}

export default App;
