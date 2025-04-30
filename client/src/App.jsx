import './App.css'
import Signup from './Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Login from './Login'
// export {BrowserRoute, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    {/* <BrowserRoute>
      <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRoute> */}
      
    <Signup/>
    </>
  )
}

export default App
