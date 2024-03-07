import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom';


function Admin() {

  //Api fetching - to get all the employees details 
  const base_url='http://localhost:8000'

  //state creation
  const [allEmployees,setAllEmployees]=useState([])//To hold all employees details

  const fetchData=async()=>{
      const result = await axios.get(`${base_url}/get-all-employees`)// details from server
      console.log(result.data.employees);//object->Array of employees
      setAllEmployees(result.data.employees)
  }
  console.log(allEmployees);//array of employees

  const deleteEmp=async(id)=>{
    const result= await axios.delete(`${base_url}/delete-an-employee/${id}`)
    console.log(result)
    alert(result.data.message)
    fetchData()
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div>
      <div>
                <img src="https://www.phppayroll.com/wp-content/uploads/employee-management-system.jpg" alt="" width={'100%'}/>
            </div>
      <h1 className='text-center text-primary m-4'>Employee Management System</h1>
      <div className="container">
        <p style={{textAlign:'justify'}}>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources. It ensures that HR efficiently manages each employee's payroll and disburses salaries on time. An EMS securely stores and manages the personal and work-related details of employees. This makes it easier for the managers to store and access relevant data when needed.
With the right EMS tool, the HR department can implement processes and help companies achieve their business objectives. By helping managers keep track of admin activities, the tool can help improve employee engagement and increase productivity. These tools also help a company with vacations and absence management and timekeeping. It can even help HR managers and organisational leaders track performance reviews of employees.</p>
      </div>

      <Link to={'/add'}>
      <a className='btn btn-primary ' style={{float:'right',padding:'10px'}} href="">Add</a>
      </Link>


      <div className='container'>
      <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
        <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          allEmployees.map((item)=>(
            <tr>
            <td>
             {item.id}
            </td>
            <td>
           {item.name}
            </td>
            <td>
            {item.age}
            </td>
           {item.designation}
            <td>
             {item.salary}
            </td>
            <td>
             <div className='d-flex justify-content-evenly'>
            <Link to={`view/${item.id}`}>
            <i class="fa-solid fa-eye"></i>
            </Link>
            <Link to={`edit/${item.id}`}>
             <i className='fa-solid fa-pen text-primary'></i>
            </Link>
             <i onClick={()=>deleteEmp(item.id)} className='fa-solid fa-trash text-danger'></i>
             </div>
            </td>
           </tr>
          ))
         }
       
      </MDBTableBody>
    </MDBTable>
      </div>
    </div>
  )
}

export default Admin