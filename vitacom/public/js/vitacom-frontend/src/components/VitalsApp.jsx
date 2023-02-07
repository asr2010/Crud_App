import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardComponent from "./Dashboard"
import ErrorComponent from "./ErrorComponent"
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import LoginComponent from "./LoginComponent"
import LogoutComponent from "./LogoutComponent"
import VitalsListComponent from "./VitalsListComponent"
import './VitalsApp.css'

export default function VitalsApp (){
    return(
        <div className="VitalsApp">
            <BrowserRouter>
            <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>} />
                    <Route path='/login' element={<LoginComponent/>} />
                    <Route path='/welcome/:username' element={<DashboardComponent/>} />
                    <Route path='/vitals' element={<VitalsListComponent/>} />
                    <Route path='/logout' element={<LogoutComponent/>} />
                    <Route path='*' element={<ErrorComponent/>} />
                </Routes>
            <FooterComponent/>
            </BrowserRouter>
            
        </div>
    )
}