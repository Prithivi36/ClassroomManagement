import Home from "./Pages/Home/Home"
import {Routes ,BrowserRouter,Route} from 'react-router-dom'
import Login from "./Pages/Login/LoginPage.jsx"
import Teachers from "./Pages/Teachers/TeachersPage.jsx"
import Classroom from "./Pages/Classroom/Classroom.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/student/:id' element={<Home />} />
            <Route path='/' element={<Login />} />
            <Route path='/login/:role' element={<Login />} />
            <Route path='/teacher/:id' element={<Teachers />} />
            <Route path={'/classroom'} element={<Classroom />} />
            <Route path={'/classroom/:sem'} element={<Classroom />} />
            <Route path={'/classroom/:sem/:sub'} element={<Classroom />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
