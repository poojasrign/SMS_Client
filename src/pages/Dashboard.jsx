import { useEffect, useState } from "react";

import { getStudents } from "../services/studentService";

function Dashboard() {

    const [students, setStudents] = useState([]);


    useEffect(() => {

        getStudents()
            .then((response) => {

                setStudents(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    }, []);


    const maleStudents = students.filter(
        (student) => student.gender === "Male"
    );


    const femaleStudents = students.filter(
        (student) => student.gender === "Female"
    );


    const activeStudents = students.filter(
        (student) => student.status === "Active"
    );


    const inactiveStudents = students.filter(
        (student) => student.status === "Inactive"
    );


    return (
        <div>

            <h1>Dashboard</h1>


            <div className="dashboard-cards">

                <div className="card">
                    <h3>Total Students</h3>
                    <p>{students.length}</p>
                </div>


                <div className="card">
                    <h3>Male Students</h3>
                    <p>{maleStudents.length}</p>
                </div>


                <div className="card">
                    <h3>Female Students</h3>
                    <p>{femaleStudents.length}</p>
                </div>


                <div className="card">
                    <h3>Active Students</h3>
                    <p>{activeStudents.length}</p>
                </div>


                <div className="card">
                    <h3>Inactive Students</h3>
                    <p>{inactiveStudents.length}</p>
                </div>

            </div>


            <h2>Recently Added Students</h2>


            {students.slice(-5).reverse().map((student) => (

                <div
                    className="recent-student"
                    key={student._id}
                >

                    <p>
                        <b>{student.name}</b>
                    </p>

                    <p>
                        Student ID: {student.studentId}
                    </p>

                    <p>
                        Department: {student.department}
                    </p>

                </div>

            ))}

        </div>
    );
}

export default Dashboard;