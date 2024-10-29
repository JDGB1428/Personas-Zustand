import { ToastContainer } from "react-toastify"
import PersonForms from "./components/PersonForms"
import PersonList from "./components/PersonList"
import 'react-toastify/dist/ReactToastify.css';



function App() {


  return (
    <>
      <div className="container mx-auto mt-20">
        <h2 className="text-5xl font-bold text-center md:w-2/3 md:mx-auto">
          Registro de {''}
          <span className="font-bold text-lime-600">Persona</span>
        </h2>
        <div className="mt-12 md:flex">
          <div className="mx-5 md:w-1/2 lg:w-2/5">
            <PersonForms />
          </div>
          <div className="overflow-y-scroll md:w-1/2 lg:w-3/5 md:h-screen ">
            <PersonList />
          </div>
        </div>
      </div>
      <ToastContainer theme="dark"/>
    </>


  )
}

export default App
