import { useState } from "react"
import { Modal } from "./Components/Modal/Modal"
import { Qviz } from "./Components/Qviz/Qviz"
import './style/global.css'
import { WindowUseres } from "./Components/Users/WindowUsers"

function App() {

const [isOpen,setIsOpen] = useState<boolean>(false)  

const openModal = () => setIsOpen(true)
const closeModal = () =>setIsOpen(false)

  return (
    <>
      <h2>
        <Qviz />
        {isOpen && <Modal closeModal={closeModal} />}
        {!isOpen && <button onClick={openModal}>Открыть окно</button>}
        <WindowUseres />
      </h2>
    </>
  )
}

export default App
