import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
    getStudents,
    deleteStudent
} from "../services/studentService";


function Students() {

    const [students, setStudents] = useState([]);

    const [search, setSearch] = useState("");

    const [department, setDepartment] = useState("");

    const [year, setYear] = useState("");

    const [status, setStatus] = useState("");


    const loadStudents = () => {

        getStudents()
            .then((response) => {

                setStudents(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    };


    useEffect(() => {

        loadStudents();

    }, []);


    const handleDelete = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );


        if (!confirmDelete) {
            return;
        }


        deleteStudent(id)
            .then(() => {

                alert("Student deleted successfully");

                loadStudents();

            })
            .catch((error) => {

                console.log(error);

            });
    };


    const filteredStudents = students.filter((student) => {

        const searchMatch =
            student.name
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            student.studentId
                .toLowerCase()
                .includes(search.toLowerCase());


        const departmentMatch =
            department === "" ||
            student.department === department;


        const yearMatch =
            year === "" ||
            student.year.toString() === year;


        const statusMatch =
            status === "" ||
            student.status === status;


        return (
            searchMatch &&
            departmentMatch &&
            yearMatch &&
            statusMatch
        );
    });


    return (
        <div>

            <h1>Students</h1>


            <div className="filters">

                <input
                    type="text"
                    placeholder="Search name or Student ID"
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                />


                <select
                    value={department}
                    onChange={(event) =>
                        setDepartment(event.target.value)
                    }
                >

                    <option value="">
                        All Departments
                    </option>

                    <option value="CSE">
                        CSE
                    </option>

                    <option value="ECE">
                        ECE
                    </option>

                    <option value="EEE">
                        EEE
                    </option>

                    <option value="MECH">
                        MECH
                    </option>

                    <option value="CIVIL">
                        IT
                    </option>

                </select>


                <select
                    value={year}
                    onChange={(event) =>
                        setYear(event.target.value)
                    }
                >

                    <option value="">
                        All Years
                    </option>

                    <option value="1">
                        1
                    </option>

                    <option value="2">
                        2
                    </option>

                    <option value="3">
                        3
                    </option>

                    <option value="4">
                        4
                    </option>

                </select>


                <select
                    value={status}
                    onChange={(event) =>
                        setStatus(event.target.value)
                    }
                >

                    <option value="">
                        All Status
                    </option>

                    <option value="Active">
                        Active
                    </option>

                    <option value="Inactive">
                        Inactive
                    </option>

                </select>

            </div>


            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Department</th>

                        <th>Year</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>


                <tbody>

                    {filteredStudents.map((student) => (

                        <tr key={student._id}>

                            <td>
                                {student.studentId}
                            </td>

                            <td>
                                {student.name}
                            </td>

                            <td>
                                {student.email}
                            </td>

                            <td>
                                {student.department}
                            </td>

                            <td>
                                {student.year}
                            </td>

                            <td>
                                {student.status}
                            </td>

                            <td>

                                <Link
                                    to={`/student/${student._id}`}
                                >
                                    View
                                </Link>


                                {" | "}


                                <Link
                                    to={`/edit-student/${student._id}`}
                                >
                                    Edit
                                </Link>


                                {" | "}


                                <button
                                    onClick={() =>
                                        handleDelete(student._id)
                                    }
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>


            {filteredStudents.length === 0 && (
                <p>No students found.</p>
            )}

        </div>
    );
}

export default Students;