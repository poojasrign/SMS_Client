import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import StudentDetails from "./pages/StudentDetails";
import Profile from "./pages/Profile";


function App() {

    const isLoggedIn = localStorage.getItem("isLoggedIn");


    if (!isLoggedIn) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route
                        path="*"
                        element={<Navigate to="/login" />}
                    />

                    <Route
                        path="/login"
                        element={<Login />}
                    />
                </Routes>
            </BrowserRouter>
        );
    }


    return (
        <BrowserRouter>

            <div className="app">

                <Sidebar />

                <div className="main">

                    <Navbar />

                    <div className="content">

                        <Routes>

                            <Route
                                path="/"
                                element={<Dashboard />}
                            />

                            <Route
                                path="/students"
                                element={<Students />}
                            />

                            <Route
                                path="/add-student"
                                element={<AddStudent />}
                            />

                            <Route
                                path="/edit-student/:id"
                                element={<EditStudent />}
                            />

                            <Route
                                path="/student/:id"
                                element={<StudentDetails />}
                            />

                            <Route
                                path="/profile"
                                element={<Profile />}
                            />

                            <Route
                                path="/login"
                                element={<Navigate to="/" />}
                            />

                        </Routes>

                    </div>

                </div>

            </div>

        </BrowserRouter>
    );
}


export default App;