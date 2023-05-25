import React from "react";
import "./index.css";

type dataProps = {
  empId: number;
  employeeName: string;
  employeeDesignation: string;
  assignedProject: string;
}[];
const Question1: React.FC = () => {
  const data: dataProps = [
    {
      empId: 2175,
      employeeName: "Khadhiri",
      employeeDesignation: "Associate",
      assignedProject: "Deloitte",
    },
    {
      empId: 2176,
      employeeName: "Ram",
      employeeDesignation: "Senior Associate",
      assignedProject: "Health Care",
    },
    {
      empId: 2177,
      employeeName: "Jeyarani",
      employeeDesignation: "Associate",
      assignedProject: "FIELDA",
    },
    {
      empId: 2178,
      employeeName: "Ravi",
      employeeDesignation: "Associate",
      assignedProject: "Service Now",
    },
    {
      empId: 2179,
      employeeName: "Harsha",
      employeeDesignation: "Lead Associate",
      assignedProject: "HealthCare",
    },
  ];
  return (
    <React.Fragment>
      <h1>Employee List</h1>
      <table className="tableDetails">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Employee Designation</th>
            <th>Assigned Project</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((employeeDetail) => (
            <tr key={employeeDetail?.empId}>
              <td>{employeeDetail?.empId}</td>
              <td>{employeeDetail?.employeeName}</td>
              <td>{employeeDetail?.employeeDesignation}</td>
              <td>{employeeDetail?.assignedProject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default Question1;
