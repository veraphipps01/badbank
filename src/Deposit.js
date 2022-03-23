

import React from 'react'
import Card from "./Card";





function Deposit({ users, setUsers}){
   const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState(true);
    const [deposit, setDeposit] = React.useState('');

    let userBalance = users.users[0].balance;
    
    let currentBalance = `Account Balance $ ${userBalance} `;

    
  
    function handleCreate(){
     
      if (!validate(deposit, userBalance)) return;
      let newBalance = users.users[0].balance + (parseInt(deposit, 10))
      setUsers((prevUsers) => {
        const user = prevUsers.users.pop();
        return {users: [{...user, balance: newBalance}]};
      })
      
      setShow(false);
    }  

    function clearForm(){
    setDeposit('');
      setShow(true);
      
    }

    // WHY WONT THIS SWITCH??????

    function validate(deposit, newBalance){
     console.log(deposit);
      if(Number.isNaN(parseInt(deposit, 10))){
       
        alert('Error: Invalid entry. Please enter a numeric value')
        return false;
      } 

        else if (deposit < 1) {
          setStatus(false );
          setShow(false);
          alert('Error: please enter an amount of $1 or over');
        return false;
        
        }
        setStatus(true);
        return true;
        
        
    }
  
      function goBack(){
       setShow(true);
      
      }
  
    

    let body;
    if (show) {
        body = (
          <>
          <h2 id="balance">{currentBalance}</h2>
           Deposit Amount<br/>
           <input type="input" className="form-control" id="deposit" placeholder="Deposit Amount " value={deposit} onChange={e => setDeposit(e.target.value)}/><br/>
          
          
           <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={deposit.length<1}>Deposit</button>
           
           </>   
        )
    } else {
      if (status) {
        body = (
          <>
                  <h5>Success</h5>
                  <button type="submit" className="btn btn-light"  onClick={clearForm}>Add another deposit</button>
                  </> 
        )
      } else {
        body = (
          <>
          <h5>Transaction Failed</h5>
          <button type="submit" className="btn btn-light"  onClick={goBack}>Try another deposit amount</button>
          </>
        )
      }
    } 
  
  
    return (
      <Card
        bgcolor="primary"
        header="Deposit"
        status={status}
        maxWidth= "25rem"
        body={body  
                
              
                
              }
      />
    )
  }
  

  export default Deposit;