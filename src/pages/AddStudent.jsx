import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { addStudent } from "../services/studentService";


function AddStudent() {

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
        status: "Active"

    });


    const handleChange = (event) => {

        setStudent({
            ...student,
            [event.target.name]: event.target.value
        });

    };


    const handleSubmit = (event) => {

        event.preventDefault();


        if (
            student.studentId === "" ||
            student.name === "" ||
            student.email === "" ||
            student.phone === "" ||
            student.dateOfBirth === "" ||
            student.gender === "" ||
            student.department === "" ||
            student.course === "" ||
            student.year === "" ||
            student.address === "" ||
            student.admissionDate === ""
        ) {

            alert("Please fill all fields");

            return;
        }


        addStudent(student)
            .then(() => {

                alert("Student added successfully");

                navigate("/students");

            })
            .catch((error) => {

                alert(
                    error.response?.data?.message ||
                    "Failed to add student"
                );

            });
    };


    return (
        <div>

            <h1>Add Student</h1>


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

                    <option value="">
                        Select Gender
                    </option>

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

                    <option value="">
                        Select Department
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
                    placeholder="B.E Computer Science"
                />


                <label>Year</label>

                <select
                    name="year"
                    value={student.year}
                    onChange={handleChange}
                >

                    <option value="">
                        Select Year
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
                    Add Student
                </button>

            </form>

        </div>
    );
}

export default AddStudent;