import React from "react";
import Card from "./Card";

function AllData({users}){
    console.log(users);
    let body;
    body = (
      <div>
      <h5>All Bank Data</h5>
      <br/>
      <table className="table bg-white">
         <thead>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
           </tr>
         </thead>
        <tbody>
          {users.users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
       
       </div>   
    )
    return (
      <Card
        bgcolor="primary"
        header="Customer Data"
        maxWidth= "40rem"
        body={body  
                
              
                
              }
      />
    );
  }
export default AllData;  