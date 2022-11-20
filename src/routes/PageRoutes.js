import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home.js"
import SignUp from "../pages/SignUp.js"
import MainPage from "../pages/MainPage.js"
import AddEntry from "../pages/AddEntry.js"
import SubtractEntry from "../pages/SubtractEntry.js"
export default function PageRoutes() {
    return (
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/SignUp" element={<SignUp />}></Route>
                <Route path="/MainPage" element={<MainPage />}></Route>  
                <Route path="/AddEntry" element={<AddEntry />}></Route>
                <Route path="/SubtractEntry" element={<SubtractEntry/>}></Route>    
            </Routes>
            </BrowserRouter>
    )
}
