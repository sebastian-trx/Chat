import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login} from './components/Login'
import {SignUp} from './components/SignUp'
import {NotFound} from './components/NotFound'
import { Chat } from "./components/Chat";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat/>} />
        <Route path="/ingresar" element={<Login />} />
        <Route path="/registrarme" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;