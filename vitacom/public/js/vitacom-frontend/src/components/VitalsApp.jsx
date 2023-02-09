import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import DashboardComponent from "./Dashboard"
import ErrorComponent from "./ErrorComponent"
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import LoginComponent from "./LoginComponent"
import LogoutComponent from "./LogoutComponent"
import VitalsListComponent from "./VitalsListComponent"
import './VitalsApp.css'
import AuthProvider, { useAuth } from "./security/AuthContext"
import VitalComponent from "./VitalComponent"

function AuthenticatedRoute({ children }) {
    const authContext = useAuth()

    if (authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}

export default function VitalsApp() {
    return (
        <div className="VitalsApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />

                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <DashboardComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/vitals' element={
                            <AuthenticatedRoute>
                                <VitalsListComponent />
                            </AuthenticatedRoute>

                        } />
                        <Route path='/vital/:id' element={
                            <AuthenticatedRoute>
                                <VitalComponent />
                            </AuthenticatedRoute>

                        } />
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>

                        } />

                        <Route path='*' element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>

        </div>
    )
}