import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("isLoggedIn");

        navigate("/login");
    };

    return (
        <div className="sidebar">

            <h2>Student Management</h2>

            <Link to="/">Dashboard</Link>

            <Link to="/students">Students</Link>

            <Link to="/add-student">Add Student</Link>

            <Link to="/profile">Profile</Link>

            <button onClick={logout}>
                Logout
            </button>

        </div>
    );
}

export default Sidebar;