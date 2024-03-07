import React, { useState } from "react";

const AddEmployeeModal = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");

  console.log(firstName);

  // const submitForm = () => {
  //   Axios.post("http://localhost:3001/save", {
  //     firstName: firstName,
  //     lastName: lastName,
  //     age: age,
  //     department: department,
  //     position: position,
  //   });
  // };

  const Submit = () => {
    props.submitForm(firstName, lastName, age, department, position);
    props.setWindowVisible();
  };

  return (
    <>
      <section className="absolute bg-black/50 h-full w-full top-0 ">
        <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-4 border max-w-lg w-full">
          <button
            className="p-2 border rounded-xl bg-blue-600 text-white"
            onClick={props.setWindowVisible}
          >
            Close
          </button>
          <form className=" text-white" onSubmit={Submit}>
            <div className="flex flex-col">
              <label htmlFor="firstName">Firstname</label>
              <input
                id="firstName"
                className="p-2 text-black"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Lastname</label>
              <input
                id="lastName"
                className="p-2 text-black"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                className="p-2 text-black"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="position">Position</label>
              <input
                id="position"
                className="p-2 text-black"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="department">Department</label>
              <input
                id="department"
                className="p-2 text-black"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>

            <div>
              <button className="p-2 border rounded-xl bg-blue-600 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddEmployeeModal;
