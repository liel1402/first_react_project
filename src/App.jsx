import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import { Home, About, Header, Tasks, Todo} from './components'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> {/*the file from ./components/Header we created*/}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Routes> 
        <Route path='/about' element={<About />}/> {/*enable to create and access the path localhost:3000/about*/}
        <Route path='/' element={<Home />}/>
        <Route path='/tasks' element={<Tasks />}/>
        <Route path='/todo/:todoId' element={<Todo />}/> {/* : --> dynamic route*/}
      </Routes>
    </>
  )
} 

export default App
