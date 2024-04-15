import {  BrowserRouter,Routes, Route} from "react-router-dom"
import NavBar from "./component/Pages/NavBar"
import Home from "./component/Pages/Home"
import Story from "./component/Pages/Story"
import Gameplay from "./component/Pages/Gameplay"
import Characters from "./component/Pages/Characters"
import Persona from "./component/Pages/Persona"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Story" element={<Story />} />
        <Route path="/Gameplay" element={<Gameplay />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Persona" element={<Persona />} />
      </Routes>
   </BrowserRouter> 
  )
}
