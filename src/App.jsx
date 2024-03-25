import Home from "./Pages/Home/Home"
import {Routes ,BrowserRouter,Route} from 'react-router-dom'
import Login from "./Pages/Login/LoginPage.jsx"
import Teachers from "./Pages/Teachers/TeachersPage.jsx"
import Classroom from "./Pages/Classroom/Classroom.jsx"
import AbsentMarkdown from "./Pages/Absent/AbsentMarkdown.jsx"
import Navbar from "./Common/Navbar.jsx"
import LeaveTablePage from "./Pages/LeaveReuests/LeaveTablePage.jsx"
import RegisterPage from "./Pages/Register/RegisterPage.jsx"
import LoginCred from "./Pages/credential/LoginCred.jsx"
import Admin from "./Pages/Admin/Admin.jsx"
import AdminRedirect from "./Pages/Admin/AdminRedirect.jsx"

function App() {

  return (
    <>
      <BrowserRouter >
          <Navbar getUser={localStorage.getItem('currentUser')} />
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/credentials' element={<LoginCred />} />
            <Route path='/admin' element={<AdminRedirect />} />
            <Route path='/adminPanel' element={<Admin />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/:role/:id' element={<Home />} />
            <Route path='/login/:role' element={<Login />} />
            <Route path='/teacher/:id' element={<Teachers />} />
            <Route path={'/classroom'} element={<Classroom />} />
            <Route path={'/classroom/:semester'} element={<Classroom />} />
            <Route path={'/classroom/:semester/:sub'} element={<Classroom />} />
            <Route path={'/absent'} element={<AbsentMarkdown />} />
            <Route path={'/allRequests'} element={<LeaveTablePage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
