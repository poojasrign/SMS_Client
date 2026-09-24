import { useEffect, useState } from "react";

import {
    useParams,
    Link
} from "react-router-dom";

import { getStudent } from "../services/studentService";


function StudentDetails() {

    const { id } = useParams();

    const [student, setStudent] = useState(null);


    useEffect(() => {

        getStudent(id)
            .then((response) => {

                setStudent(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    }, [id]);


    if (!student) {
        return <p>Loading...</p>;
    }


    return (
        <div>

            <h1>Student Details</h1>


            <p>
                <b>Student ID:</b> {student.studentId}
            </p>

            <p>
                <b>Name:</b> {student.name}
            </p>

            <p>
                <b>Email:</b> {student.email}
            </p>

            <p>
                <b>Phone:</b> {student.phone}
            </p>

            <p>
                <b>Date of Birth:</b>{" "}
                {student.dateOfBirth?.substring(0, 10)}
            </p>

            <p>
                <b>Gender:</b> {student.gender}
            </p>

            <p>
                <b>Department:</b> {student.department}
            </p>

            <p>
                <b>Course:</b> {student.course}
            </p>

            <p>
                <b>Year:</b> {student.year}
            </p>

            <p>
                <b>Address:</b> {student.address}
            </p>

            <p>
                <b>Admission Date:</b>{" "}
                {student.admissionDate?.substring(0, 10)}
            </p>

            <p>
                <b>Status:</b> {student.status}
            </p>


            <Link to="/students">
                Back to Students
            </Link>

        </div>
    );
}

export default StudentDetails;