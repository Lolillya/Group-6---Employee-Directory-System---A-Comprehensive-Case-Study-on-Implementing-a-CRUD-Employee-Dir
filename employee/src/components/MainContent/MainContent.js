import React, { useEffect, useState } from "react";
import Axios from "axios";
import AddEmployeeModal from "../AddEmployeeModal/AddEmployeeModal";

const MainContent = () => {
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const setWindowVisible = () => {
    setIsModalOpen(!isModalOpen);
  };

  const submitForm = (firstName, lastName, age, dept, position) => {
    Axios.post("http://localhost:3001/save", {
      firstName: firstName,
      lastName: lastName,
      age: age,
      department: dept,
      position: position,
    }).then(() => {
      getEmployees();
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((res) => {
      setData(res.data);
    });
  };

  const handleEditClick = (index) => {
    setEditRowIndex(index);
  };

  const handleCellEdit = (newValue, dataIndex) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[dataIndex] = { ...newData[dataIndex], ...newValue };
      return newData;
    });
  };

  const updateEmployee = (
    empID,
    empFirstName,
    empLastName,
    empAge,
    empPosition,
    empDepartment
  ) => {
    const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const nameRegex = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)?$/;
    if (
      !empAge ||
      isNaN(empAge) ||
      empAge < 18 ||
      specialCharsRegex.test(empFirstName) ||
      specialCharsRegex.test(empLastName) ||
      specialCharsRegex.test(empPosition) ||
      specialCharsRegex.test(empDepartment) ||
      !nameRegex.test(empFirstName.trim()) ||
      !nameRegex.test(empLastName.trim()) ||
      !nameRegex.test(empPosition.trim())
    ) {
      alert(
        "Please provide valid inputs without special characters and in the format 'Name Name'."
      );
      return;
    }
    setEditRowIndex(null);
    Axios.put("http://localhost:3001/update", {
      empID: empID,
      firstName: empFirstName,
      lastName: empLastName,
      age: empAge,
      department: empDepartment,
      position: empPosition,
    }).then(() => {
      getEmployees();
    });
  };

  const deleteEmployee = (employeeID) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      Axios.delete("http://localhost:3001/delete/" + employeeID).then(() => {
        getEmployees();
      });
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <section className="p-4 gap-4 sm:ml-64 flex flex-col w-auto justify-between max-w-full">
        {isModalOpen && (
          <AddEmployeeModal
            setWindowVisible={setWindowVisible}
            submitForm={submitForm}
          />
        )}
        <div className="flex w-full justify-between max-w-screen-2xl">
          <div>
            <button
              className="p-2 border rounded-xl bg-blue-600 text-white"
              onClick={setWindowVisible}
            >
              Add employees +
            </button>
          </div>
        </div>

        <hr />

        <div>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="p-1 px-3 py-2 min-w-52">Employee ID</th>
                <th className="p-1 px-3 py-2 min-w-56">Firstname</th>
                <th className="p-1 px-3 py-2 min-w-56">Lastname</th>
                <th className="p-1 px-3 py-2 min-w-56">Age</th>
                <th className="p-1 px-3 py-2 min-w-56">Position</th>
                <th className="p-1 px-3 py-2 min-w-56">Department</th>
              </tr>
            </thead>

            <tbody>
              {data.map((d, i) => (
                <tr key={i} className=" border-b-2">
                  <td>{d.empID}</td>
                  <td>
                    {editRowIndex === i ? (
                      <input
                        className=""
                        type="text"
                        value={d.empFirstName}
                        onChange={(e) =>
                          handleCellEdit({ empFirstName: e.target.value }, i)
                        }
                      />
                    ) : (
                      d.empFirstName
                    )}
                  </td>
                  <td>
                    {editRowIndex === i ? (
                      <input
                        className=""
                        type="text"
                        value={d.empLastName}
                        onChange={(e) =>
                          handleCellEdit({ empLastName: e.target.value }, i)
                        }
                      />
                    ) : (
                      d.empLastName
                    )}
                  </td>
                  <td>
                    {editRowIndex === i ? (
                      <input
                        className=""
                        type="text"
                        value={d.empAge}
                        onChange={(e) =>
                          handleCellEdit({ empAge: e.target.value }, i)
                        }
                      />
                    ) : (
                      d.empAge
                    )}
                  </td>
                  <td>
                    {editRowIndex === i ? (
                      <input
                        className=""
                        type="text"
                        value={d.empPosition}
                        onChange={(e) =>
                          handleCellEdit({ empPosition: e.target.value }, i)
                        }
                      />
                    ) : (
                      d.empPosition
                    )}
                  </td>
                  <td>
                    {editRowIndex === i ? (
                      // <input
                      //   className=""
                      //   type="text"
                      //   value={d.empDepartment}
                      //   onChange={(e) =>
                      //     handleCellEdit({ empDepartment: e.target.value }, i)
                      //   }
                      // />

                      <div className="flex flex-col">
                        <select
                          className="p-2 text-black"
                          value={d.empDepartment}
                          onChange={(e) =>
                            handleCellEdit({ empDepartment: e.target.value }, i)
                          }
                        >
                          <option disabled value={""}>
                            Select Department
                          </option>
                          <option value={"CCIS"}>CCIS</option>
                          <option value={"CAS"}>CAS</option>
                          <option value={"CEA"}>CEA</option>
                        </select>
                      </div>
                    ) : (
                      d.empDepartment
                    )}
                  </td>
                  <td>
                    {editRowIndex === i ? (
                      <button
                        className="saveBtn p-2 border rounded-xl bg-blue-600 text-white"
                        onClick={() =>
                          updateEmployee(
                            d.empID,
                            d.empFirstName,
                            d.empLastName,
                            d.empAge,
                            d.empPosition,
                            d.empDepartment
                          )
                        }
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="editBtn p-2 border rounded-xl bg-blue-600 text-white"
                        onClick={() => handleEditClick(i)}
                      >
                        Edit
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="deleteBtn p-2 border rounded-xl bg-blue-600 text-white"
                      onClick={() => deleteEmployee(d.empID)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MainContent;
