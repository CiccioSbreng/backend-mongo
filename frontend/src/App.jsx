import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import AddPost from './pages/AddPost'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addPost' element={<AddPost />}/>
        <Route path='/posts/:id' element={<PostDetail />}/>


      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
