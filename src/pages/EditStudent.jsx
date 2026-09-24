import { useEffect, useState } from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    getStudent,
    updateStudent
} from "../services/studentService";


function EditStudent() {

    const { id } = useParams();

    const navigate = useNavigate();


    const [student, setStudent] = useState({

        studentId: "",
        name: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
        department: "",
        course: "",
        year: "",
        address: "",
        admissionDate: "",
        status: ""

    });


    useEffect(() => {

        getStudent(id)
            .then((response) => {

                const data = response.data;


                setStudent({

                    studentId: data.studentId,

                    name: data.name,

                    email: data.email,

                    phone: data.phone,

                    dateOfBirth:
                        data.dateOfBirth?.substring(0, 10),

                    gender: data.gender,

                    department: data.department,

                    course: data.course,

                    year: data.year,

                    address: data.address,

                    admissionDate:
                        data.admissionDate?.substring(0, 10),

                    status: data.status

                });

            })
            .catch((error) => {

                console.log(error);

            });

    }, [id]);


    const handleChange = (event) => {

        setStudent({

            ...student,

            [event.target.name]: event.target.value

        });

    };


    const handleSubmit = (event) => {

        event.preventDefault();


        updateStudent(id, student)
            .then(() => {

                alert("Student updated successfully");

                navigate("/students");

            })
            .catch((error) => {

                alert(
                    error.response?.data?.message ||
                    "Update failed"
                );

            });
    };


    return (
        <div>

            <h1>Edit Student</h1>


            <form onSubmit={handleSubmit}>

                <label>Student ID</label>

                <input
                    type="text"
                    name="studentId"
                    value={student.studentId}
                    onChange={handleChange}
                />


                <label>Name</label>

                <input
                    type="text"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                />


                <label>Email</label>

                <input
                    type="email"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                />


                <label>Phone</label>

                <input
                    type="text"
                    name="phone"
                    value={student.phone}
                    onChange={handleChange}
                />


                <label>Date of Birth</label>

                <input
                    type="date"
                    name="dateOfBirth"
                    value={student.dateOfBirth}
                    onChange={handleChange}
                />


                <label>Gender</label>

                <select
                    name="gender"
                    value={student.gender}
                    onChange={handleChange}
                >

                    <option value="Male">
                        Male
                    </option>

                    <option value="Female">
                        Female
                    </option>

                </select>


                <label>Department</label>

                <select
                    name="department"
                    value={student.department}
                    onChange={handleChange}
                >

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

                    <option value="IT">
                        IT
                    </option>

                </select>


                <label>Course</label>

                <input
                    type="text"
                    name="course"
                    value={student.course}
                    onChange={handleChange}
                />


                <label>Year</label>

                <select
                    name="year"
                    value={student.year}
                    onChange={handleChange}
                >

                    <option value="1">1</option>

                    <option value="2">2</option>

                    <option value="3">3</option>

                    <option value="4">4</option>

                </select>


                <label>Address</label>

                <textarea
                    name="address"
                    value={student.address}
                    onChange={handleChange}
                />


                <label>Admission Date</label>

                <input
                    type="date"
                    name="admissionDate"
                    value={student.admissionDate}
                    onChange={handleChange}
                />


                <label>Status</label>

                <select
                    name="status"
                    value={student.status}
                    onChange={handleChange}
                >

                    <option value="Active">
                        Active
                    </option>

                    <option value="Inactive">
                        Inactive
                    </option>

                </select>


                <br /><br />

                <button type="submit">
                    Update Student
                </button>

            </form>

        </div>
    );
}

export default EditStudent;