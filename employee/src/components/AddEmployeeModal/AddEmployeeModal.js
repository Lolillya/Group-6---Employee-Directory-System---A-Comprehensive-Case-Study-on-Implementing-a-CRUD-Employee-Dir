import React, { useState } from "react";

const AddEmployeeModal = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateInput()) return;
    props.submitForm(firstName, lastName, age, department, position);
    props.setWindowVisible();
  };

  const validateInput = () => {
    const nameRegex = /^[a-zA-Z\s]{1,20}$/;
    const departmentRegex = /^[a-zA-Z\s]{1,20}$/;
    const positionRegex = /^[a-zA-Z\s]{1,20}$/;

    if (
      !nameRegex.test(firstName.trim()) ||
      !nameRegex.test(lastName.trim()) ||
      !positionRegex.test(position.trim()) ||
      !departmentRegex.test(department.trim())
    ) {
      setError(
        "Please enter valid information without special characters and within 20 characters."
      );
      return false;
    }

    if (age === "" || isNaN(age) || parseInt(age) < 18) {
      setError("Age must be a number and should be 18 or above.");
      return false;
    }

    setError("");
    return true;
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
          <form className="text-white" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="firstName">Firstname</label>
              <input
                id="firstName"
                className="p-2 text-black"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                pattern="[a-zA-Z\s]{1,20}"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Lastname</label>
              <input
                id="lastName"
                className="p-2 text-black"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                pattern="[a-zA-Z\s]{1,20}"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                className="p-2 text-black"
                type="number"
                min="18"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="position">Position</label>
              <input
                id="position"
                className="p-2 text-black"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                pattern="[a-zA-Z\s]{1,20}"
                required
              />
            </div>
            {/* <div className="flex flex-col">
              <label htmlFor="department">Department</label>
              <input
                id="department"
                className="p-2 text-black"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                pattern="[a-zA-Z\s]{1,20}"
                required
              />
            </div> */}

            <div className="flex flex-col">
              <label>Department</label>
              <select
                className="p-2 text-black"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option disabled value={""}>
                  Select Department
                </option>
                <option value={"CCIS"}>CCIS</option>
                <option value={"CAS"}>CAS</option>
                <option value={"CEA"}>CEA</option>
              </select>
            </div>

            <div>
              <button className="p-2 border rounded-xl bg-blue-600 text-white">
                Submit
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </section>
    </>
  );
};

export default AddEmployeeModal;
