import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Mainview from './components/Mainview/Mainview'
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main-page">
          <Routes>
            <Route path='/' element={<Mainview />} />
            <Route path='projects' element={<Projects />} />
            <Route path='blog' element={<Blog />} />
          </Routes>
          <Aside />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
