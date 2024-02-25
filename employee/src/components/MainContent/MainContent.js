import React, { useState } from "react";
import Axios from "axios";

const MainContent = () => {
  // Form states
  // Assigns input values to state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [age, setAge] = useState(0);
  const [dept, setDept] = useState("");
  const [position, setPosition] = useState("");

  // db State
  // Takes data from database
  const [data, setData] = useState([]);

  const submitForm = () => {
    Axios.post("http://localhost:3001/save", {
      firstName: firstName,
      lastName: lastName,
      age: age,
      department: dept,
      position: position,
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((res) => {
      setData(res.data);
      console.log(res);
    });
  };

  return (
    <>
      <section className="p-4 sm:ml-64">
        <div>
          <div>
            <label>FirstName: </label>
            <input
              className=" border"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              placeholder="Enter lastname"
            />
          </div>

          <div>
            <label>LastName: </label>
            <input
              className=" border"
              onChange={(event) => {
                setLastname(event.target.value);
              }}
              placeholder="Enter lastname"
            />
          </div>

          <div>
            <label>Age: </label>
            <input
              className=" border"
              onChange={(event) => {
                setAge(event.target.value);
              }}
              placeholder="Enter age"
            />
          </div>

          <div>
            <label>Department: </label>
            <input
              className=" border"
              onChange={(event) => {
                setDept(event.target.value);
              }}
              placeholder="Enter department"
            />
          </div>

          <div>
            <label>Position: </label>
            <input
              className=" border"
              onChange={(event) => {
                setPosition(event.target.value);
              }}
              placeholder="Enter position"
            />
          </div>

          <div>
            <button
              className="border px-3 py-1 rounded-full"
              onClick={submitForm}
            >
              Submit
            </button>
          </div>
        </div>
        {/*  */}

        <hr />

        <div>
          <h2 className=" text-xl font-bold">Data: </h2>
          <button
            className="border px-3 py-1 rounded-full"
            onClick={getEmployees}
          >
            Get Data
          </button>
          <table className="border">
            <tr>
              <th className="border">Employee ID</th>
              <th className="border">lastName</th>
              <th className="border">FirstName</th>
              <th className="border">Age</th>
              <th className="border">Department</th>
              <th className="border">Position</th>
              <th className="border-b"></th>
              <th className="border-b"></th>
            </tr>

            {data.map((d) => (
              <tr id={d.empID}>
                <td>{d.empID}</td>
                <td>{d.empFirstName}</td>
                <td>{d.empLastName}</td>
                <td>{d.empAge}</td>
                <td>{d.empDepartment}</td>
                <td>{d.empPosition}</td>
                <td>
                  <button className="p-2 border rounded-full">Edit</button>
                </td>
                <td>
                  <button className="p-2 border rounded-full">Delete</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </>
  );
};

export default MainContent;
