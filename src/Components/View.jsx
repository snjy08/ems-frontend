import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from "axios";
import { useParams } from "react-router-dom";

function View() {
  const base_url='http://localhost:8000'

  const [employeeData,setEmployeeData]=useState({})
  //get employee id from url
  const {id}=useParams()
  console.log(id);//
  //get a particular employee details
  const getEmployee=async(id)=>{
    const result = await axios.get(`${base_url}/get-an-employee/${id}`)
    console.log(result.data.employees);//object
    setEmployeeData(result.data.employees)
  }
  console.log(employeeData);//object
  useEffect(()=>{
    getEmployee(id)
  },[])

  return (
    <div style={{height:'74vh'}}>
      <h3 className="text-center m-4 text-primary">View Employee Details</h3>
      <div className="container p-5 d-flex justify-content-between">
        <MDBCard style={{ width: "500px" }} className="shadow">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Employee Details</MDBCardTitle>
           {
             <MDBCardText>
             <MDBListGroup className="shadow" style={{ minWidth: '22rem' }} light>
       <MDBListGroupItem  className='bg-light text-primary px-3'>
       Employee ID : {employeeData.id}
       </MDBListGroupItem>
       <MDBListGroupItem noBorders  active  aria-current='true' className='bg-light text-primary px-3'>
       Full Name :  {employeeData.name}
       </MDBListGroupItem>
       <MDBListGroupItem noBorders  className='bg-light text-primary px-3'>
       Age :  {employeeData.age}
       </MDBListGroupItem>
       <MDBListGroupItem noBorders  className='bg-light text-primary px-3'>
        Designation :  {employeeData.designation}
       </MDBListGroupItem>
       <MDBListGroupItem noBorders  className='bg-light text-primary px-3'>
      Salary :  {employeeData.salary}
       </MDBListGroupItem>
     </MDBListGroup>
             </MDBCardText>
           }
          </MDBCardBody>
        </MDBCard>

        <div className="shadow image card text-center" style={{ width: "300px" }}>
          <img
            width={"100%"}
            src="https://th.bing.com/th/id/R.47a33fc3a2af2afc93b99a17e57cb80e?rik=H1SecvwqateySA&riu=http%3a%2f%2fwww.rw-designer.com%2ficon-image%2f18556-256x256x32.png&ehk=MexKFEO8HQMnNv2jmMuGW3IFqAecFfzuUSzVIFs4oVo%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
      </div>

      <div className="text-center mb-4">
        <MDBBtn href="/">Back To Home</MDBBtn>
      </div>

    </div>
  );
}

export default View;