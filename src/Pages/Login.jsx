import React from 'react'
import { Link } from 'react-router-dom'
import Admin from '../Components/Admin'

function Login() {
    
  return (
    <div>
        <div className='row d-flex justify-content-center m-2 align-items-center' style={{height:'74vh'}}>
        <div className=' text-center col-6 '>
            <h1>Employee Management System</h1> <br /> <br />
       <h4> An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources. It ensures that HR efficiently manages each employee's payroll and disburses salaries on time. An EMS securely stores and manages the personal and work-related details of employees. This makes it easier for the managers to store and access relevant data when needed.</h4>
       <br /> <br />
       <Link to={'/admin'}> 
       <button className='btn btn-success'>get start</button>
       </Link>
        </div>
        <div className='col-6'>
            <img src="https://img.freepik.com/free-vector/hiring-agency-candidates-job-interview_1262-18940.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709683200&semt=ais" width='800px' alt="" />
        </div>
        </div>
    </div> 
  ) 
}

export default Login 