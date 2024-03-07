
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import Add from './Components/Add';
import View from './Components/View';
import Edit from './Components/Edit'
import PageNotFound from './Components/PageNotFound'
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Routes>
        
        <Route path='/' element={<Login/>}/>
        {/* lhttp://localhost:3000 */}
        <Route path='admin' element={<Admin/>}/>
        {/* http://localhost:3000/add */}
        <Route path='add' element={<Add/>}/>
        {/* http://localhost:3000/view/3 */}
        <Route path='admin/view/:id' element={<View/>}/>
          {/* http://localhost:3000/edit/3 */}
          <Route path='admin/edit/:id' element={<Edit/>}/>
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  ); 
}

export default App;

