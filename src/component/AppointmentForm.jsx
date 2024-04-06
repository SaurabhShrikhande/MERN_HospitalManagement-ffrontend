import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Ayurvedacharya",
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "https://mern-hospital-management-backend-1.onrender.com/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
      console.log(data.doctors);
    };
    fetchDoctors();
  }, []);
  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "https://mern-hospital-management-backend-1.onrender.com/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName(""),
        setLastName(""),
        setEmail(""),
        setPhone(""),
        setNic(""),
        setDob(""),
        setGender(""),
        setAppointmentDate(""),
        setDepartment(""),
        setDoctorFirstName(""),
        setDoctorLastName(""),
        setHasVisited(""),
        setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {/* <div className="container form-component appointment-form"> */}
      <div>
      <div style={{border:"1px solid black", margin:"50px" , paddingBottom:"50px"}}>
        <h2>Appointment</h2>
        <form onSubmit={handleAppointment} >
          <div>
            <input style={{margin:"15px"}} type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input  type="text"placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div>
            <input style={{margin:"15px"}} type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input  type="number" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <input style={{margin:"15px"}} type="number" placeholder="NIC" value={nic} onChange={(e) => setNic(e.target.value)}/>
            <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)}/>
          </div>
          <div>
            <select style={{margin:"15px"}} value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input  type="date" placeholder="Appointment Date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />
          </div>
          <div>
            <select style={{margin:"15px"}} value={department} onChange={(e) => {setDepartment(e.target.value);setDoctorFirstName(""); setDoctorLastName("");}} >
              {departmentsArray.map((depart, index) => { return (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                );
              })}
            </select>


            <select
              value={`${doctorFirstName} ${doctorLastName}`}
              onChange={(e) => { const [firstName, lastName] = e.target.value.split(" ");
                setDoctorFirstName(firstName);
                setDoctorLastName(lastName);
              }}
              disabled={!department}
            >
              <option value="">Select Doctor</option>
              {doctors
                .filter((doctor) => doctor.doctorDepartment === department)
                .map((doctor, index) => (
                  <option
                    value={`${doctor.firstName} ${doctor.lastName}`}
                    key={index}
                  >
                    {doctor.firstName} {doctor.lastName}
                  </option>
                ))}
            </select>
          </div>
          <textarea rows="4" cols={40} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address"/>
          <div style={{display:"flex",  gap: "10px", justifyContent: "center", alignItems:"center", }}  >
            <p style={{ }}>Have you visited before?</p>
            <input  type="checkbox" 
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
              style={{  width: "25px", height:"25px"}}
            />
          </div>
          <button style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
        </form>
        </div>
      </div>
    </>
  );
};

