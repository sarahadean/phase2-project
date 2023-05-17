import {
  Routes,
  Route,
} from 'react-router-dom'

import Home from '../pages/Home'
import PackingList from '../pages/PackingList'
import BucketList from '../pages/BucketList'
import Header from '../components/Header'
import Visited from '../pages/Visited'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route exact path="/" element={<Home />}>HOME</Route>
          <Route path="/bucket-list" element={<BucketList />}>Bucket List</Route>
          <Route path="/visited" element={<Visited />}>Visited</Route>
          <Route path="/packing-list" element={<PackingList />}>Packing List</Route>
      </Routes>
    </div>
  );
}

export default App;
